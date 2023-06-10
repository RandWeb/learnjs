let scores = [19,20,18,10,3,5,10,19,17];
let scoresStr= "19,20,18,10,3,5,10,19,17"
console.log(Array.isArray(scores));

// از اول آرایه شروع به پیدا کردن می کند اولین رو که دید اندیس اون رو بیرون می فرسته و حروج میزنه
console.log(scores.indexOf(10)); // if notfound reurn = -1
console.log(scores.lastIndexOf(10)); // if notfound reurn = -1

console.log(scores.slice(2,5)); //return value indexes: 2,3,4
console.log(scores.slice(2,-2)); //return value indexes: 2,3,4,5,6

console.log(scores.join(','));

console.log(scoresStr.split(','));

console.log("before reverse : " + scores + ", after = " +scores.reverse() )