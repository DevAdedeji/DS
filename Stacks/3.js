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


function baseConverter(decNumber, base) {
    const newStack = new Stack()
    const digits = "0123456789ABCDEFGHIJKLMNOPQRTSTUVWXYZ"
    let number = decNumber
    let rem
    let baseString

    if (base < 0 || base > 36) {
        return ''
    }

    while (number > 0) {
        rem = Math.floor(number % base)
        newStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!newStack.isEmpty()) {
        baseString += digits[newStack.pop()]
    }

    return baseString

}

console.log(baseConverter(233443, 16));