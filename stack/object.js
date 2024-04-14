/************************************
 * 
 * 使用对象实现
 * 
 ==================================*/

class Stack {
    constructor() {
        this.count = 0
        this.targetStack = {}
    }

    //入栈
    push(value) {
        this.targetStack[this.count] = value
        this.count++
    }

    //出栈
    pop() {
        if(this.isEmpry()) {
            return ''
        }
        --this.count
        let value = this.targetStack[this.count]
        delete this.targetStack[this.count]
        return value
    }

    //栈的大小
    size() {
        return this.count
    }

    //清空栈
    clear() {
        this.targetStack = {}
        this.count = 0
    }

    //是否为空
    isEmpry() {
        return this.count === 0
    }

    //打印栈
    print() {
        for(let key in this.targetStack) {
            console.log(this.targetStack[key])
        }
    }

    //栈顶
    top() {
        if(this.isEmpry()) {
            return ''
        }
        return  this.targetStack[--this.count]
    }

    //toString
    toString() {
        let str = ''

        if(this.isEmpry()) {
            return str
        }

        for(let key in this.targetStack) {
            str += this.targetStack[key]
        }

        return str
    }
}

const stack = new Stack()

stack.push(9)
stack.push(8)
stack.push(7)
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.size())
stack.print()
console.log(stack.top())
