// Some Advanced Array methods
let nums = [10, 11, 1, 2, 3, 5, 6, 7, 9, 4]

// @@iterator
// let iterator = nums[Symbol.iterator]();

// for (const n of iterator) {
//     console.log(n);
// }

// entries
// let aEntries = nums.entries()
// for (const n of aEntries) {
//     console.log(n);
// }

// Sorting elements
// nums.sort((a, b) => a - b);
// console.log(nums);
// let friends = [
//     { name: 'John', age: 30 },
//     { name: 'Ana', age: 20 },
//     { name: 'Chris', age: 10 }
// ]

// function compareFriends(a, b) {
//     if (a.age < b.age) {
//         return -1
//     } if (a.age > b.age) {
//         return 1
//     }
//     return 0
// }

// console.log(friends.sort(compareFriends));

// let names = ["Ana", "john", "ana", "John"]
// let an = []
// for (let i = 0; i < names.length; i++) {
//     if (names[i].includes("a")) {
//         an.push(names[i])
//     }
// }
// console.log(an);

// function sortName(a, b) {
//     if (a.toLowerCase() < b.toLowerCase()) {
//         return -1
//     }
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return 1
//     }
//     return 0
// }

// console.log(names.sort(sortName));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(numbers.toString());
console.log(numbers.join('-'));


// function mutltipleOf2(element) {
//     return element % 2 === 0
// }

// console.log(numbers.findIndex(mutltipleOf2));