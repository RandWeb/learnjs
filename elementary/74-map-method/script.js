let scores = [2,1,3,5,10];

let newScores = scores.map(score=>{
    console.log(score);
    return score **2;
});

console.log(scores,newScores);