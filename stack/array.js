/************************************
 * 
 * 使用数组实现
 * 
 ==================================*/

class Stack {
    constructor() {
        this.targetStack = []
    }

    //入栈
    push(value){
        this.targetStack.push(value)
    }

    //出栈
    pop() {
        if(this.isEmpty()) {
            return ''
        }
        return this.targetStack.pop()
    }

    //栈的大小
    size() {
        return this.targetStack.length
    }

    //清空栈
    clear() {
        this.targetStack = []
    }

    //是否为空
    isEmpty() {
        return this.targetStack.length === 0
    }

    //打印栈
    print() {
        this.targetStack.forEach((item) => {
            console.log(item);
        })
        console.log('\n');
    }

    //栈顶
    top() {
        if(this.isEmpty()) {
            return ''
        }
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

console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.top())
console.log(stack.size())
stack.print()

stack.clear()
console.log(stack.size())
stack.print()
