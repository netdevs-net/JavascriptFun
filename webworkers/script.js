const worker = new Worker("worker2.js");
worker.addEventListener("message", ({ data }) => {
  console.log(`Worker sent.`, data);
  if (data.action == "countTo2Billion") {
    console.log("Done with blocking the UI thread");
  }
});

// This demos the Message object, and it can transport all types of objects, not only messages. it can carry any response object. Then I built a counter to 2 Billion
const now = performance.now();
// --------- > This has been moved to worker2.js
// count = 0;
// for (let i = 0; i <= 2000000000; i++) {
//   count++;
// }
// --------- > End of This has been moved to worker2.js.

worker.postMessage({ type: "cmd", action: "countTo2Billion" });

// to test the load delay of the requested task
console.log(`Performance: ${now}`);
alert("Something on the UI thread");
