// Creating and Initializing Array

// let daysOfWeek = new Array();
// daysOfWeek = new Array(7)
// daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
// Creating a list array
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Adding Elements

// Push method 
// Will add an element to the end of the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11)

// Inserting an element in the first position
// Using the unshift method
numbers.unshift(-1, 0)


// We use the pop method to remove an element from the end of an array
numbers.pop()

// We use the shift method to remove an element form the beginning of an array
numbers.shift()


// Adding and removing elements from a specific position
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Splice method
// we can use the splice method to remove an element from an array by specifying the index that we would like to remove from and how many elements we want to remove 
// numbers.splice(5, 3)

// we can also use the slice method to insert numbers into an array
numbers = [1, 5, 6, 7, 8, 9, 10]
numbers.splice(1, 0, 2, 3, 4)


console.log(numbers);