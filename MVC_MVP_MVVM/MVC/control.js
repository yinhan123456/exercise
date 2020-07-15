import V from './view.js'
import M from './model.js'

class P {
  constructor() {
    this.v = new V(this)
    this.m = new M(this.v)
  }

  add () {
    this.m.addOne()
  }

  minus () {
    this.m.minusOne()
  }
}

export default P
