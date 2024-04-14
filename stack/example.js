/********************************
 * 
 * 示例：进制转换的应用
 * 
 ==============================*/
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
     return s[s.length - 1]
   }
 }

 function decimalToBinary(number) {
  const stack = new Stack()
  let num = number
  let targetNumber = null
  let binaryNumber = ''

  while(num > 0) {
    targetNumber = Math.floor(num % 2)
    stack.push(targetNumber)
    num = Math.floor(num / 2)
  }

  while(!stack.isEmpty()) {
    binaryNumber += stack.pop().toString()
  }

  return binaryNumber
 }

 //验证
 console.log(decimalToBinary(10));
 console.log(decimalToBinary(233));
