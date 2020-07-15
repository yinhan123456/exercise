class V {
  constructor (c) {
    this.c = c
    this.input = null
  }

  init (val) {
    let input = document.createElement('input')
    let btnAdd = document.createElement('button')
    let btnMinus = document.createElement('button')

    this.input = input
    let that = this

    input.value = val
    btnAdd.innerText = 'add one'
    btnMinus.innerText = 'minus one'

    btnAdd.onclick = function() { that.c.add() }
    btnMinus.onclick = function() { that.c.minus() }

    document.body.append(input)
    document.body.append(btnAdd)
    document.body.append(btnMinus)
  }

  render (val) {
    this.input.value = val
  }
}

export default V
