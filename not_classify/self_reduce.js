function selfReduce (f, pre) {
  const arr = Array.prototype.slice.call(this)

  let cur
  for (let i in arr) {
    cur = arr[i]
    pre = f(pre, cur, arr)
  }

  return pre
}

function inherit(subClass, supClass) {
  subClass.prototype = Object.create(supClass.prototype, {
    constructor: {
      value: SubClass,
      enumerable: false,
      configurable: true,
      writable: true
    }
  })
}
