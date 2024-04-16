/*****************************************
 * 
 * 双端队列
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

const queue = new doubleQueue()
queue.enFrontQueue(9)
queue.enFrontQueue(8)
queue.enBackQueue(7)
console.log(queue.toString());
console.log(queue.size());

queue.removeFront()
console.log(queue.toString());
console.log(queue.size());

queue.removeBack()
console.log(queue.toString());
console.log(queue.size());

queue.enFrontQueue(6)
queue.enFrontQueue(5)
console.log(queue.toString());
console.log(queue.size());

