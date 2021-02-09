const { months, mons, days, dys } = require('./utils')

class D {
  constructor(...args) {
    this._date = new Date(...args)
  } 

  get year() {
    return year[this._date.getFullYear()]
  }

  get yr() {
    return yr[this._date.getFullYear() % 100]
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return mon[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDate()]
  }

  get dy() {
    return dys[this._date.getDate()]
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

  // format() { //Format Method???? What is mask string? Can't I just run everything here as a variable? How do I make variable params?
  //   "Y" = this.year; //Year Full

  //     // if Y, strDate.replace(this._date.getFullYear()) {
  //     // } else { .............
  //     // or is it switch/case?

  //   "y" = this.yr;
  //   "M" = this.month;
  //   "m" = this.mon; // Month Short (3 char)
  //   "D" = this.day; //date, padded 0 infront
  //   "d" = this._date.getDate(); //date
  //   "H" = this._date.getHours(); // hours, padded 0 infront
  //   "h" = this._date.getHours(); // hours
  //   "I" = this._date.getMinutes(); // Minutes, padded  infront
  //   "i" = this._date.getMinutes(); // minutes
  //   "S" = this._date.getSeconds(); // Seconds Padded
  //   "s" = this._date.getSeconds(); //  Seconds
  // }

  // console.log(d.format()) (Y, M ,D) <-- Default
  // otherwise
  // console.log(d.format('y/m/d')) <-- so it has seperator / or : or whatever sep=?
  // What is a mask string?????

}

  // Year
  const Year = new Date()
  console.log(Year.getFullYear())
  // Year
  const Yr = new Date()
  console.log(Yr.getFullYear() % 100)
  // Month
  const Month = new Date()
  console.log(Month.getMonth())
  // Date
  const Day = new Date()
  console.log(Day.getDate())
  // Hours
  const Hours = new Date()
  console.log(Hours.getHours())
  // Minutes
  const Minutes = new Date()
  console.log(Minutes.getMinutes())
  // Seconds
  const Seconds = new Date()
  console.log(Seconds.getSeconds())

  const dateStr = Date.toString
  console.log(dateStr.getMonth)