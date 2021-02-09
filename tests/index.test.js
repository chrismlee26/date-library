const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')


test('D.Day', () => {
  expect(today.day).toBe('Tuesday')
})

test('D.dy', () => {
  expect(today.dy).toBe('Tue')
})