let scores = [];
let sum = 0;
//shift unshift push pop
while (true) {
  let score = Number(prompt("enter the number, exit = -1"));
  if (score == -1) break;
  scores.push(score);
}


scores.forEach((score) => (sum += score));

console.log(sum / scores.length);
