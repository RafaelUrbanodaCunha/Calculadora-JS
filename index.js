function calc(a1, a2, operator) {
  return eval(`${a1}${operator}${a2}`)
}
console.log(calc(1, 5, '/'))
