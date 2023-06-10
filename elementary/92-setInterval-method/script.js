let counter = 10;
let timer = setInterval(() => {
  counter--;
  console.log(counter);
  if (counter === 0) clearInterval(timer);
}, 1000);
