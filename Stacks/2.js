// Stack class with scope
const items = new WeakMap()

class Stack {
    constructor() {
        this.count = 0
        items.set(this, {})
    }
    push(element) {
        const s = items.get(this)
        s[this.count] = element
        this.count++
        return s
    }
    pop() {
        const s = items.get(this)
        delete s[this.count - 1]
        return s
    }
    peek() {
        const s = items.get(this)
        let lastElement = s[this.count - 1]
        return lastElement
    }
    isEmpty() {
        return this.count === 0
    }
    clear() {
        this.count = 0
        items.set(this, {})
    }
}

let stack = new Stack()

stack.push(500)
stack.push(600)
stack.push(700)
stack.push(800)
stack.push(900)
console.log(stack.peek());