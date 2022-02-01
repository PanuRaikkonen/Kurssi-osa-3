//1.
const createSecret = (code) => {
  const presses = [];

  document.addEventListener("keypress", (event) => {
    presses.push(event.key);

    if (presses.length > code.length) {
      presses.shift();
    }
    console.log(presses);
    if (presses.join("") === code) {
      alert("Kirjoitit hello");
    }
  });
};
createSecret("hello");

//2.
const cords = () => {
  const coords = document.querySelector("#coords");

  document.addEventListener("dblclick", (event) => {
    coords.textContent = `X:  ${event.clientX}, Y: ${event.clientY}`;
  });
};
cords();

//3.
const touch = () => {
  document.querySelector("h1").addEventListener("touchstart", (event) => {
    console.log("toimii");
  });
};
touch();

//4.
const timer = (delay) => {
  const time = document.querySelector("#time");
  setTimeout(() => {
    time.textContent = "Out of Time";
  }, delay * 1000);
};
// timer(15);

//5.
const timerIdle = (delay) => {
  const time = document.querySelector("#time");
  let timer;

  const timerReset = (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      time.textContent = "Out of Time";
    }, delay * 1000);
  };
  timerReset();
  document.addEventListener("mousemove", timerReset);
  document.addEventListener("touchstart", timerReset);
};
timerIdle(5);
