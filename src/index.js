// Challenge 1
console.log('---Challenge #1---')

class D {
  constructor(...args) {
    this.Date = new Date(...args)
  } 
}

// Create a date from a string (single parameter)
// const d = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
const e = new D(1970, 1, 1, 0, 0, 0)

// console.log(d)
// console.log(e)

// Challenge 2
// console.log('---Challenge #2---')

// const d = new D() 
// console.log(d.year())  // 2019 fullYear
// console.log(d.month()) // July
// console.log(d.day())   // 27
// console.log(d.hours()) // 18
// console.log(d.mins())  // 6
// console.log(d.secs())  // 5

const e = new D(2022, 1, 1, 0, 0, 0)