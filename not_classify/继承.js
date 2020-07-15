function object(o) {
  function F () {}
  Object.setPrototypeOf(F, o)

  return new F()
}
