class M {
  constructor(v) {
    this.value = 0
    this.v = v

    this.v.init(this.value)
  }

  addOne () {
    this.value += 1

    this.v.render(this.value)
  }

  minusOne () {
    this.value -= 1

    this.v.render(this.value)
  }
}

export default M
