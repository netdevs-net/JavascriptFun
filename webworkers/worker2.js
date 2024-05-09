/**
 * Web worker to show passing heavy thread process to worker threads
 * @author Ryan Iguchi
 * @see {@link https://github.com/netdevs-net/}
 *
 * @param {count} (inclusive)
 * @return {status} - status/response of heavy process.
 */

addEventListener("message", ({ data }) => {
  console.log("Countin", data);

  // This is a heavy process.
  if (data.action == "countTo2Billion") {
    let count = 0;
    for (let i = 0; i <= 2000000000; i++) {
      count++;
    }

    postMessage({ action: "countTo2Billion", status: "done" });
  }
});
