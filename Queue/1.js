//  The Queue Data Structure

class Queue {
    constructor() {
        // variable to track how many elements are in the data structure
        this.count = 0
        // Variable to track the first element n the data structure
        this.lowestCount = 0
        // Variable holding the elements
        this.items = {}
    }
    // Function to add element to the end of the data structure 
    enqueue(element) {
        this.items[this.count] = element
        this.count++
        return this.items
    }
    // Function to remove element at the start of the data structure
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    // Function to check the first element of the data structure
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    // Function checking if the data structure is empty
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    // Function to check the size of the data structure
    size() {
        return this.count - this.lowestCount
    }
    // Function to clear all elements in the data structure
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    // Function to join all elements in the data structure as a string
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString
        for (let i = 0; i < this.lowestCount; i++) {
            objString = `${this.items[0]}, ${this.items[i]}`
        }
        return objString
    }
}

// let newQueue = new Queue()

// Adding new element to queue
// console.log(newQueue.enqueue(5));
// console.log(newQueue.enqueue(15));
// console.log(newQueue.enqueue(50));

// Removing element from Queue
// console.log(newQueue.dequeue());

// Empty
// console.log(newQueue.isEmpty());

// Size
// console.log(newQueue.size());

function hotPotato(elementsList, num) {
    const queue = new Queue(); // {1}
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // {2}
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        elimitatedList.push(queue.dequeue()); // {4}
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // {5}
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`)