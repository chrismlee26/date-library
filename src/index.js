class D {
  constructor(...args) {
    this._date = new Date(...args)
  } 

  // // Year
  // const Year = new Date()
  // console.log(Year.getFullYear())
  // // Year
  // const Yr = new Date()
  // console.log(Yr.getFullYear() % 100)
  // // Month
  // const Month = new Date()
  // console.log(Month.getMonth())
  // // Date
  // const Day = new Date()
  // console.log(Day.getDate())
  // // Hours
  // const Hours = new Date()
  // console.log(Hours.getHours())
  // // Minutes
  // const Minutes = new Date()
  // console.log(Minutes.getMinutes())
  // // Seconds
  // const Seconds = new Date()
  // console.log(Seconds.getSeconds())

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    return this._date.getFullYear() % 100
  }

  get month() {
    return this._date.getMonth()
  }

  get mon() {
    return this._date.getMonth()
  }

  get day() {
    return this._date.getDate()
  }

  get dy() {
    return this._date.getDate()
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

  format() { //Format Method???? What is mask string? Can't I just run everything here as a variable? 
    "Y" = this._date.getFullYear(); //Year Full
    "y" = this._date.getFullYear(); //Year Short (last 2)
    "M" = this._date.getMonth(); // Month Full
    "m" = this._date.getMonth(); // Month Short (3 char)
    "D" = this._date.getDate(); //date, padded 0 infront
    "d" = this._date.getDate(); //date
    "H" = this._date.getHours(); // hours, padded 0 infront
    "h" = this._date.getHours(); // hours
    "I" = this._date.getMinutes(); // Minutes, padded  infront
    "i" = this._date.getMinutes(); // minutes
    "S" = this._date.getSeconds(); // Seconds Padded
    "s" = this._date.getSeconds(); //  Seconds
  }

  // console.log(d.format()) (Y, M ,D) <-- Default
  // otherwise
  // console.log(d.format('y/m/d')) <-- so it has seperator / or : or whatever sep=?
  // What is a mask string?????
}