/*****************************************
 * 
 * 队列应用 - 回文检查
 * 
 =======================================*/

 class doubleQueue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.queue = {}
  }

  //从队前进队
  enFrontQueue(value) {
    //空队列时
    if(this.isEmpty()) {
      this.enBackQueue(value)
    } else if(this.lowestCount > 0) {
      this.lowestCount--
      this.queue[this.lowestCount] = value
    } else {
      for(let i = this.count; i > 0; i--) {
        this.queue[i] = this.queue[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.queue[0] = value
    }
  }

  //从队后进队
  enBackQueue(value) {
    this.queue[this.count] = value
    this.count++
  }

  //从队前离队
  removeFront() {
    if(this.isEmpty()) {
      return ''
    }
    const result = this.queue[this.lowestCount]
    delete this.queue[this.lowestCount]
    this.lowestCount++
    return result
  }

  //从队后离队
  removeBack() {
    if(this.isEmpty()) {
      return ''
    }
    --this.count
    const result = this.queue[this.count]
    delete this.queue[this.count]
    return result
  }

  //是否为空队列
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  //队列长度
  size() {
    return this.count - this.lowestCount
  }

  //队头
  start() {
    if(this.isEmpty()) {
      return ''
    }
    return this.queue[this.lowestCount]
  }

  //toString方法
  toString() {
    if(this.isEmpty()) {
      return ''
    }
    let str = ''
    for(let key in this.queue) {
      str += this.queue[key]
    }
    return str
  }
}

//回文检查处理函数
function palindromeChecker(str) {
  if(str === undefined || str === null || (str !== null && str.length === 0)) {
    return false
  }

  const queue = new doubleQueue()

  const targetStr = str.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstCharm, lastChar
  for(let i = 0; i < targetStr.length; i++) {
    queue.enBackQueue(targetStr.charAt(i))
  }
  while(queue.size() > 1 && isEqual) {
    firstCharm = queue.removeFront()
    lastChar = queue.removeBack()
    if(firstCharm !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}

console.log(palindromeChecker('abcba'));
