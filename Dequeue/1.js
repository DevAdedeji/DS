class Dequeue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[this.lowestCount] = element
        }
        return this.items
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
        return this.items
    }
    removeFront() {
        if (this.isEmpty()) {
            return ""
        }
        delete this.items[this.lowestCount]
        this.lowestCount++
        return this.items
    }
    removeBack() {
        if (this.isEmpty()) {
            return ""
        }
        delete this.items[this.count - 1]
        this.lowestCount--
        return this.items
    }
    peekFront() {
        if (this.isEmpty()) {
            return ""
        }
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) {
            return ""
        }
        return this.items[this.count - 1]
    }
    size() {
        return this.count
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
}

// let newD = new Dequeue()

// console.log(newD.addBack(55));
// console.log(newD.addBack(66));
// console.log(newD.addBack(77));
// console.log(newD.addBack(88));
// console.log(newD.addBack(99));
// console.log(newD.addFront(44));
// console.log(newD.peekBack());
// console.log(newD.peekFront());
// console.log(newD.removeFront());
// console.log(newD.removeBack());

function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) { // {1}
        return false;
    }
    const deque = new Dequeue(); // {2}
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3}
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) { // {4}
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1 && isEqual) { // {5}
        firstChar = deque.removeFront(); // {6}
        lastChar = deque.removeBack(); // {7}
        if (firstChar !== lastChar) {
            isEqual = false; // {8}
        }
    }
    return isEqual
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));