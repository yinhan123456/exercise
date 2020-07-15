class M {
  constructor(v) {
    this.value = 0
    this.v = v
  }

  addOne () {
    return this.value += 1
  }

  minusOne () {
    return this.value -= 1
  }
}

export default M
