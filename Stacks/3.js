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
// Converting decimal numbers to binary using stack
function decimalToBinary(decNumber) {
    let newStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString;

    while (number > 0) {
        rem = Math.floor(number % 2)
        newStack.push(rem)
        number = Math.floor(number / 2)
    }
    while (!newStack.isEmpty()) {
        binaryString += newStack.pop().toString()
    }
    return binaryString
}

// A function that converts from one base to another using the stack class
function baseConverter(number, base) {
    // Initializing the stack class
    const newStack = new Stack()
    // Digits having all the base
    const digits = "0123456789ABCDEFGHIJKLMNOPQRTSTUVWXYZ"
    // The remainder which will be stored inside the stack
    let rem
    //  Result of the  operation (concatenated remainders)
    let baseString

    // If base is less than 0 or greater than 36, return nothing which stops the function)
    if (base < 0 || base > 36) {
        return ''
    }


    // The loop will run unless number < 0
    while (number > 0) {
        // Find reminder by using the modulo operator
        rem = Math.floor(number % base)
        // Push the remainder to stack
        newStack.push(rem)
        // Update the number
        number = Math.floor(number / 2)
        // The loop will stop when number becomes less than 0
    }

    while (!newStack.isEmpty()) {
        // Concatenate the remainders
        baseString += digits[newStack.pop()]
    }

    return baseString

}

console.log(baseConverter(233443, 16)); // 137EC8137FFFFEC813
console.log(baseConverter(1010, 10)); // 375136250