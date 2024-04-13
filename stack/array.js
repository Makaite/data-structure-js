class Stack {
    constructor() {
        this.targetStack = []
    }

    push(value){
        this.targetStack.push(value)
    }

    pop() {
        this.targetStack.pop()
    }

    size() {
        return this.targetStack.length
    }

    clear() {
        this.targetStack = []
    }

    print() {
        this.targetStack.forEach((item) => {
            console.log(item);
        })
        console.log('\n');
    }

    top() {
        return this.targetStack[this.targetStack.length - 1]
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size())
console.log(stack.top())
stack.print()

stack.pop()
console.log(stack.top())
console.log(stack.size())
stack.print()

stack.clear()
console.log(stack.size())
stack.print()
