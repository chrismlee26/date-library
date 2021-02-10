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
    if (days[this._date.getDay()] < 10) {
      return 0 + days[this._date.getDay()]
    } else {
    return days[this._date.getDay()]
    }
  }

  get dy() {
    return dys[this._date.getDay()]
  }

  get date() {
    return this._date.getDate()
  }

  get hours() {
    if ([this._date.getHours()] < 10) {
      return 0 + [this._date.getHours()]
    } else {
    return this._date.getHours()
    }
  }

  get hrs() {
    return this._date.getHours()
  }

  get minutes() {
    if ([this._date.getMinutes()] < 10) {
      return 0 + [this._date.getMinutes()]
    } else {
    return this._date.getMinutes()
    }
  }

  get mins() {
    return this._date.getMinutes()
  }

  get seconds() {
    if ([this._date.getSeconds()] < 10) {
      return 0 + [this._date.getSeconds()]
    } else {
    return this._date.getSeconds()
    }
  }

  get secs() {
    return this._date.getSeconds()
  }

  format(dateFormat='D, m t, Y') {
    const dateDict = {    
      "Y" : this.year, //Year full ('2021')
      "y" : this.yr, // Year short ('21')
      "M" : this.month, // Month full ('January')
      "m" : this.mon, // Month short ('Jan')
      "D" : this.day, //Day full ('Tuesday')
      "d" : this.dy, //Day short ('Tue')
      "t" : this.date, //Date short
      "H" : this.hours, // Hours full ('06")
      "h" : this.hrs, // Hours short ('6')
      "I" : this.minutes, // Minutes full ('05')
      "i" : this.mins, // Minutes short ('5')
      "S" : this.seconds, // Seconds full ('09')
      "s" : this.secs //  Seconds short ('9')
    }

    let outputString = ''
    for (let i = 0; i < dateFormat.length; i++) { //for loop, i counts dateFormat string
      if (dateDict[dateFormat[i]] === undefined) { //look through dateDict to find out if called by dateFormat
        // add the character from formatString append to output string character [dateFormat[i]]
        outputString += dateFormat[i]
      } else { 
        // add the value from the dict to output string [date dict]
        outputString += dateDict[dateFormat[i]] //append that value at key [i] to output string
      }
    }
    return outputString
  }

}

// const a = new D()
// const b = a.format('') //Test here for date lib
// console.log(b)

// const c = a.format()
// console.log(c)