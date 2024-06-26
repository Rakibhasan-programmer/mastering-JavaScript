// array - collection of data stored into a variable

const numbers = [1, 2, 3, 5];
console.log(numbers[0]);

// push - insert element at last position
numbers.push(20);
numbers.push(30);
numbers.push(89);

// pop - remove element from last
numbers.pop();

// unshift - insert element at first position
numbers.unshift(19);
numbers.unshift(45);

// shift - removes element from the first
numbers.shift();

// length - return size of the array
console.log(numbers.length);

console.log(typeof numbers); // object

// sort - sort in ascending order
console.log(numbers.sort((a, b) => a-b));

// array type checking
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // returns either true or false


// iterate through arrays - for of loop
const arrayA = [1, 2, 3, 4, 5, 6, 7];
for(const num of arrayA){
    console.log(num);
}

// we can also iterate throgh the array by using for in loop
const arrayB = [1, 2, 3, 4, 5];
for (const key in arrayB) {
    console.log(arrayB[key]);
}