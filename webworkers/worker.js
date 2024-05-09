self.addEventListener("message", (data) => {
  console.log("Main script sent", data);
  self.postMessage("I'm a worker thread");
});
