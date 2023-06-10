let seconds = Number(prompt("please enter seconds "));
let minute = Number(prompt("please enter minute "));
let timer = setInterval(() => {
  if (minute === 0 && seconds === 0) clearInterval(timer);
  if (seconds === -1) {
    minute--;
    seconds = 60;
  }
  console.log(minute + " : " + seconds);
  seconds--;
}, 1000);
