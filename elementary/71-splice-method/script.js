let numbers = [10, 20, 3, 15, 68, 78, 12];

console.log(numbers);

// splice(start:index, deleteCount,newElement,newElement,...);

let removedNumbers = numbers.splice(2, 4, 100, 200);

console.log(numbers,removedNumbers);
