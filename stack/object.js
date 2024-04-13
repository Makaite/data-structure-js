class Stack {
    constructor() {
        this.count = 0
        this.targetStack = {}
    }

    push(value) {
        this.targetStack[this.count] = value
        this.count++
    }

    pop() {
        this.count--
        delete this.targetStack[this.count]
    }

    size() {
        return this.count
    }

    clear() {
        this.targetStack = {}
        this.count = 0
    }

    print() {
        for(let key in this.targetStack) {
            console.log(this.targetStack[key])
        }
    }

    top() {
        return  this.targetStack[--this.count]
    }
}

const stack = new Stack()

stack.push(9)
stack.push(8)
stack.push(7)
console.log(stack.size())
stack.print()
console.log(stack.top())
