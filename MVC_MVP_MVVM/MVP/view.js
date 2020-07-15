import P from './presenter.js'

class V {
  constructor () {
    this.input = null
    this.p = new P(this)
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

    btnAdd.onclick = function() { that.p.add() }
    btnMinus.onclick = function() { that.p.minus() }

    document.body.append(input)
    document.body.append(btnAdd)
    document.body.append(btnMinus)
  }

  render (val) {
    console.log(this)
    this.input.value = val
  }
}

export default V
