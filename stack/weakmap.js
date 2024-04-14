/************************************
 * 
 * 使用weakmap实现，可以做到保护结构的
 * 内部元素
 * 
 ==================================*/

const weakmap = new WeakMap()

class Stack {
  constructor() {
    weakmap.set(this, [])
  }

  //入栈
  push(value) {
    const s = weakmap.get(this)
    s.push(value)
  }

  //出栈
  pop() {
    const s = weakmap.get(this)
    return s.pop()
  }

  //栈的大小
  size() {
    const s = weakmap.get(this)
    return s.length
  }


  //清空栈
  clear() {
    const s = weakmap.get(this)
    s = []
  }

  //是否为空
  isEmpty() {
    const s = weakmap.get(this)
    return s.length === 0
  }

  //打印栈
  print() {
    const s = weakmap.get(this)
    if(this.isEmpty()) {
      return ''
    }
    s.forEach((item) => {
      console.log(item);
    })
    console.log('\n');
  }

  //栈顶
  top() {
    const s = weakmap.get(this)
    if (this.isEmpty()) {
      return ''
    }
    return s[s - 1]
  }
}

const stack = new Stack()

stack.push(7)
stack.push(8)
stack.push(9)
stack.print()
stack.pop()
console.log(stack.size());
stack.print()
