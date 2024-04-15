/*****************************************
 * 
 * 单端队列
 * 
 =======================================*/

class singleQueue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.queue = {}
  }

  //进队
  enqueue(value) {
    this.queue[this.count] = value
    this.count++
  }

  //离队
  dequeue() {
    if(this.isEmpty()) {
      return ''
    }
    const result = this.queue[this.lowestCount]
    delete this.queue[this.lowestCount]
    this.lowestCount++
    return result
  }

  //队头
  start() {
    if(this.isEmpty()) {
      return ''
    }
    return this.queue[this.lowestCount]
  }

  //是否为空队列
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  //队列长度
  size() {
    return this.count - this.lowestCount
  }

  //清空队列
  clear() {
    this.queue = {}
    this.count = 0
    this.lowestCount = 0
  }

  //toString
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

const queue = new singleQueue()

queue.enqueue(9)
queue.enqueue(8)
queue.enqueue(7)
console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.start());
