// Creating our stack class
class Stack {
    constructor() {
        this._count = 0
        this._items = {}
    }
    // methods
    // pushing element to the array
    push(element) {
        this._items[this._count] = element
        this._count++
    }
    // getting the size of the array
    size() {
        return this._count
    }
    // checking if the array is empty
    isEmpty() {
        return this._count === 0
    }
    // removing the last element in the array
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        // decrease _count by 1
        this._count--
        // result will be the last element in the array
        const result = this._items[this._count];
        // delete the last element
        delete this._items[this._count]
        // return the last element
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        // return the last element of the array
        return this._items[this._count - 1]
    }
    // clear elements
    clear() {
        this._items = {}
        this._count = 0
    }
    // toString method
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString
        for (let i = 0; i < this._count; i++) {
            objString = `${this._items[0]}, ${this._items[i]}`
        }
        return objString
    }
}

const stack = new Stack()

// checking if the data structure is empty
// console.log(stack.isEmpty());

// pushing element into the list
stack.push(5)
stack.push(10)
stack.push(150)

// Peeking
// console.log(stack.peek());


// removing elements
// stack.pop()
// stack.pop()

// Size
console.log(stack.size());

// toString method
// console.log(stack.toString());
