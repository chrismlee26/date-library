const { months, mons, days, dys } = require('./utils')

class D {
  constructor(...args) {
    this._date = new Date(...args)
  } 

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    return this._date.getFullYear() % 100
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return mons[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  }

  get dy() {
    return dys[this._date.getDay()]
  }

  get date() {
    return this._date.getDate()
  }

  get hours() {
    return this._date.getHours()
  }

  get minutes() {
    return this._date.getMinutes()
  }

  get secs() {
    return this._date.getSeconds()
  }



  format(dateFormat='D, M d, Y') {
    const dateDict = {    
      "Y" : this.year, //Year Full
      "y" : this.yr,
      "M" : this.month,
      "m" : this.mon, // Month Short (3 char)
      "D" : this.day, //date, padded 0 infront
      "d" : this._date.getDate(), //date
      "H" : this._date.getHours(), // hours, padded 0 infront
      "h" : this._date.getHours(), // hours
      "I" : this._date.getMinutes(), // Minutes, padded  infront
      "i" : this._date.getMinutes(), // minutes
      "S" : this._date.getSeconds(), // Seconds Padded
      "s" : this._date.getSeconds() //  Seconds}
    }

    let outputString = ''
    for (let i = 0; i < dateFormat.length; i++) { //for loop, i counts dateFormat string
      if (dateDict[dateFormat[i]] === undefined) { //look through dateDict to find out if called by dateFormat
        // add the character from formatString append to output string character [dateFormat[i]]
        // 'Y, M, D'
        outputString += dateFormat[i]
      } else { 
        // add the value from the dict to output string [date dict]
        outputString += dateDict[dateFormat[i]] //append that value at key [i] to output string
      }
    }
    return outputString
  }

}

const a = new D()
const b = a.format('Y, M, D')
console.log(b)

const c = a.format()
console.log(c)