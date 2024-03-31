import { archLogger } from "../logger/chalk-theme";
import { NetworkContext } from "../network-config";
import { resetNetworkContext } from "./contract-event-listeners";

interface RpcCallWithTimeoutOptions {
  timeout: number;
  retries: number;
}
export async function rpcCallWithTimeout(
  rpcFunction,
  args,
  options: RpcCallWithTimeoutOptions = {
    timeout: 5000,
    retries: 5
  },
  networkContext: NetworkContext
) {
  const {
    timeout,
    retries,
  } = options;

  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Create a promise that rejects after a timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Request timed out'));
        }, timeout);
      });

      // Use Promise.race to race the async call against the timeout
      return await Promise.race([
        rpcFunction(...args),
        timeoutPromise
      ]);
    } catch (e) {
      lastError = e;
      archLogger.notice(`rpcCallWithTimeout Attempt ${attempt} failed: ${e.message}`);

      if (attempt === retries) {
        // If this fails, force service to restart to trigger re-attempt at unwrapping
        process.exit(2)
        throw e; // Re-throw the last error if all retries failed
      } else {
        await resetNetworkContext(networkContext)
      }
    }
  }

  throw lastError; // Throw last error in case loop exited unexpectedly
}