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
  enFontQueue(value) {
    //空队列时
    if(this.isEmpty()) {
      this.enBackQueue(value)
    }
    this.queue[this.lowestCount] = value
    this.lowestCount--
  }

  //从队后进队
  enBackQueue(value) {
    this.queue[this.count] = value
    this.count++
  }

  //是否为空队列
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

}
