import "dotenv/config";
import { Archaeologist } from "./models/archaeologist";
import { validateEnvVars } from "./utils/validateEnv";
import { fetchProfileAndSchedulePublish } from "./utils/onchain-data";
import { healthCheck, warnIfEthBalanceIsLow } from "./utils/health-check";
import { loadPeerIdFromFile } from "./utils";
import { SIGNAL_SERVER_LIST } from "./models/node-config";
import { archLogger } from "./logger/chalk-theme";
import { setupEventListeners } from "./utils/contract-event-listeners";
import { NetworkContext } from "./network-config";

const RESTART_INTERVAL = 21_600_000; // 6 Hours
const CONTRACT_DATA_REFETCH_INTERVAL = process.env.REFETCH_INTERVAL
  ? Number(process.env.REFETCH_INTERVAL)
  : 21_600_000; // (default is ~6 Hours)

export async function startService(opts: {
  nodeName: string;
  listenAddresses?: string[];
  peerId?: any;
  bootstrapList?: string[];
  networkContexts: NetworkContext[];
  isTest?: boolean;
}) {
  validateEnvVars();

  let { nodeName, bootstrapList, listenAddresses, peerId } = opts;
  peerId = peerId ?? (await loadPeerIdFromFile());

  const arch = new Archaeologist({
    name: nodeName,
    bootstrapList: bootstrapList ?? process.env.BOOTSTRAP_LIST?.split(",").map(s => s.trim()),
    listenAddresses,
    peerId: peerId,
    listenAddressesConfig:
      listenAddresses === undefined
        ? {
            signalServerList: SIGNAL_SERVER_LIST,
          }
        : undefined,
  });

  opts.networkContexts.forEach(async networkContext => {
    if (!process.env.DISABLE_HEALTH_CHECK) {
      await healthCheck(networkContext, peerId.toString());
    }

    // The archaeologist service is currently setup to listen to contract events and automatically
    // schedule a profile publish when the relevant event is received. This should always work, but
    // if it does not for some crazy reason, the following code can be enabled to fetch directly from the contracts
    // to schedule a publish every so often.
    // Only thing needed to enable this is to have problem archaeologist nodes set their env var REFETCH_CONTRACT_DATA=true
    if (process.env.REFETCH_CONTRACT_DATA) {
      setInterval(() => fetchProfileAndSchedulePublish(networkContext), CONTRACT_DATA_REFETCH_INTERVAL);
    }

    fetchProfileAndSchedulePublish(networkContext);
    setupEventListeners(networkContext);
    setInterval(async () => warnIfEthBalanceIsLow(networkContext), RESTART_INTERVAL);
  });

  await arch.initLibp2pNode();
  arch.setupSarcophagusNegotiationStreams();

  // Restart node on 6 hour intervals in attempt to avoid websocket issues
  setInterval(async () => arch.restartNode(), RESTART_INTERVAL);

  [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach(eventType => {
    process.on(eventType, async e => {
      archLogger.info(`${nodeName} received exit event: ${eventType}`, true);
      archLogger.info(e, true);
      await arch.shutdown();
      process.exit(2);
    });
  });
}
