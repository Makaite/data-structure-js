/*****************************************
 * 
 * 队列应用 - 击鼓传花
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

//击鼓传花的处理函数
function hotPotato(list, num) {
  const queue = new singleQueue()

  const resultList = []

  for(let i = 0; i < list.length; i++) {
    queue.enqueue(list[i])
  }

  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    resultList.push(queue.dequeue())
  }

  return {
    eliminated: resultList,
    winner: queue.dequeue()
  }
}

const names =  [1,2,3,4,5]

const result = hotPotato(names, 7)
console.log(result);
