import M from './model.js'

class P {
  constructor(v) {
    this.v = v
    this.m = new M()

    v.init(this.m.value)
  }

  add () {
    let val = this.m.addOne()
    this.v.render(val)
  }

  minus () {
    this.v.render(this.m.minusOne())
  }
}

export default P
