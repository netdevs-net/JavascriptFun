/**
 * script to demonstrate debounce and throttled on an input
 * @author
 * @see {@link https://github.com/netdevs-net/}
 *
 * @param {count} (inclusive)
 * @return {status} - status/response of heavy process.
 */

// This is a fiddle script. Not mine. I preferred this view.

const area = document.getElementById("area");

const state = {
  throttled: {
    x: 0,
    y: 0,
  },
  debounced: {
    x: 0,
    y: 0,
  },
};

area.addEventListener("mousemove", coordUpdater("r"));
area.addEventListener("mousemove", throttled(200, coordUpdater("t")));
area.addEventListener("mousemove", debounced(200, coordUpdater("d")));

function handler(e) {
  mouseToState(e);
  updateDisp(e);
}

function coordUpdater(prefix) {
  const x = document.getElementById(`${prefix}x`);
  const y = document.getElementById(`${prefix}y`);
  return function (e) {
    x.innerText = e.clientX;
    y.innerText = e.clientY;
  };
}

function throttled(delay, fn) {
  // this is the function that handles the throttle countdown
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

// this is the function that handles the throttle countdown

function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

// function expensiveFn(e) {
//   if (!e) return;
//   console.log(e.x, e.y);
// }
//
// const throttled = throttle(expensiveFn, 1000);
//
// function throttle(callback, delay) {
//   let timer;
//   let lastTimeCalled = 0;
//   return function (...args) {
//     let currentTime = Date.now();
//     let differenceTime = currentTime - lastTimeCalled;
//     let delayRemaining = delay - differenceTime;
//
//     function invokCallback() {
//       callback.call(this, ...args);
//       lastTimeCalled = Date.now();
//     }
//
//     if (delayRemaining > 0) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(invokCallback, delayRemaining);
//     } else {
//       invokCallback();
//       console.log("Invoked. \n");
//     }
//   };
// }

// alert("loaded. where is the throttle?");
