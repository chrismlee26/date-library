// Challenge 1
// console.log('---Challenge #1---')

// class D {
//   constructor(...args) {
//     this.Date = new Date(...args)
//   } 
// }

// The date Object can be initialized in different ways:
// const a = new Date() // no parameters
// const b = new Date('January 1, 1970') // with a string
// const c = new Date(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
// const d = new Date(new Date()) // with another date object

// const a = new D() // With no parameters: 
// const b = new D('9/26/1965') // Create a date from a string (single parameter)
// const c = new D(1970, 1, 1, 0, 0, 0) // Create a date from some numbers (list of parameters)
// const d = new D(new Date()) // With a Date

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Challenge 2
console.log('---Challenge #2---')

class D {
  constructor(...args) {
    this.Date = new Date(...args)
  } 
  get year() { // getter starts with get
      return this._date.getFullYear() // returns full year
  }
}

const oldDate = new Date()
oldDate.getFullYear()

// Externally year looks like a property! 
// const d = new D()

// Make a date with values for Y, M, D etc.
const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 