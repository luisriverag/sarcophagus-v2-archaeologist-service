import { archLogger } from "../../logger/chalk-theme";
import { handleRpcError } from "../rpc-error-handler";
import { inMemoryStore } from "../onchain-data";
import { getRandomInt, retryFn } from "./helpers";
import { warnIfEthBalanceIsLow } from "../health-check";
import { ethers } from "ethers";
import { NetworkContext } from "../../network-config";
import { rpcCallWithTimeout } from "../rpc-helpers";
import { schedulePublishPrivateKey } from "../scheduler";

export async function publishPrivateKey(sarcoId: string, networkContext: NetworkContext) {
  const { viewStateFacet, ethWallet, archaeologistFacet, keyFinder } = networkContext;

  archLogger.notice(`[${networkContext.networkName}] Unwrapping sarcophagus ${sarcoId}`, true);

  try {
    const anotherSarcoIsBeingUnrwapped = inMemoryStore
      .get(networkContext.chainId)!
      .sarcoIdsInProcessOfHavingPrivateKeyPublished.length > 0;

    if (anotherSarcoIsBeingUnrwapped) {
      // Attempt to reschedule
      const currentSarco = inMemoryStore.get(networkContext.chainId)!.sarcophagi.find(sarco => sarco.id === sarcoId);
      if (currentSarco) {
        const newScheduleTime = new Date(Date.now() + (getRandomInt(2, 8) * 60 * 1000)) // schedule for between 2-8 minutes later
        archLogger.notice(`Another sarco is being unwrapped, rescheduling ${sarcoId} for ${newScheduleTime.toLocaleString()}`);
        schedulePublishPrivateKey(
          sarcoId,
          newScheduleTime,
          currentSarco.contractResurrectionTime,
          networkContext
        );
        return
      }
    }

    inMemoryStore
      .get(networkContext.chainId)!
      .sarcoIdsInProcessOfHavingPrivateKeyPublished.push(sarcoId);

    archLogger.notice("Retrieving Public Key");
    const myCursedArch = await rpcCallWithTimeout(
      viewStateFacet.getSarcophagusArchaeologist,
      [sarcoId, ethWallet.address],
      { timeout: 5000, retries: 5 },
      networkContext
    );

    archLogger.notice(`Public Key Found: ${myCursedArch.publicKey}`);
    const privateKey = keyFinder.derivePrivateKeyFromPublicKey(myCursedArch.publicKey);

    archLogger.notice(`Private Key Derived Key Found: ${privateKey}`);
    const callPublishPrivateKeyOnArchFacet = (): Promise<any> => {
      return archaeologistFacet.publishPrivateKey(sarcoId, privateKey);
    };

    archLogger.notice(`Publishing Private Key on-chain`);
    const tx = await retryFn(callPublishPrivateKeyOnArchFacet, 0, true, `$unwrap ${sarcoId}`);
    const receipt = await tx.wait();

    const gasUsed = ethers.utils.formatEther(receipt.effectiveGasPrice.mul(receipt.gasUsed));
    const cummulativeGasUsed = ethers.utils.formatEther(
      receipt.effectiveGasPrice.mul(receipt.cumulativeGasUsed)
    );

    inMemoryStore.get(networkContext.chainId)!.sarcophagi = inMemoryStore
      .get(networkContext.chainId)!
      .sarcophagi.filter(s => s.id !== sarcoId);
    inMemoryStore.get(networkContext.chainId)!.deadSarcophagusIds.push(sarcoId);

    archLogger.notice(`[${networkContext.networkName}] Unwrapped ${sarcoId} successfully!`, true);
    archLogger.debug(`[${networkContext.networkName}] Gas used: ${gasUsed.toString()} ETH`);
    archLogger.debug(
      `[${networkContext.networkName}] Cumulative Gas used: ${cummulativeGasUsed.toString()} ETH`
    );
  } catch (e) {
    await archLogger.error(`[${networkContext.networkName}] Unwrap failed: ${e}`, {
      sendNotification: true,
      logTimestamp: true,
      networkContext
    });
    handleRpcError(e, networkContext);
  } finally {
    inMemoryStore.get(networkContext.chainId)!.sarcoIdsInProcessOfHavingPrivateKeyPublished =
      inMemoryStore
        .get(networkContext.chainId)!
        .sarcoIdsInProcessOfHavingPrivateKeyPublished.filter(id => id !== sarcoId);

    await warnIfEthBalanceIsLow(networkContext, true);
  }
}
