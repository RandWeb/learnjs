let allQuestions = [
  { id: 1, title: "2 + 2", answer: 4 },
  { id: 2, title: "5 + 2", answer: 7 },
  { id: 3, title: "2 + 8", answer: 10 },
  { id: 4, title: "13 + 2", answer: 15 },
];

let finalScore = 0;

allQuestions.forEach((question) => {
  let answer = Number(prompt(question.title + " ?"));
  if (answer == question.answer) finalScore++;
});

console.log("finalScore = " + finalScore);
