!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dateLibrary=e()}(this,(function(){"use strict";const t=["January","February","March","April","May","June","July","August","September","October","November","December"],e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];class r{constructor(...t){this._date=new Date(...t)}get year(){return this._date.getFullYear()}get yr(){return this._date.getFullYear()%100<10?0+[this._date.getFullYear()%100]:this._date.getFullYear()%100}get month(){return t[this._date.getMonth()]}get mon(){return e[this._date.getMonth()]}get day(){return s[this._date.getDay()]}get dy(){return a[this._date.getDay()]}get date(){return this._date.getDate()}get hours(){return[this._date.getHours()]<10?0+[this._date.getHours()]:this._date.getHours()}get hrs(){return this._date.getHours()}get minutes(){return[this._date.getMinutes()]<10?0+[this._date.getMinutes()]:this._date.getMinutes()}get mins(){return this._date.getMinutes()}get seconds(){return[this._date.getSeconds()]<10?0+[this._date.getSeconds()]:this._date.getSeconds()}get secs(){return this._date.getSeconds()}format(t="D, m t, Y"){const e={Y:this.year,y:this.yr,M:this.month,m:this.mon,D:this.day,d:this.dy,t:this.date,H:this.hours,h:this.hrs,I:this.minutes,i:this.mins,S:this.seconds,s:this.secs};let s="";for(let a=0;a<t.length;a++)void 0===e[t[a]]?s+=t[a]:s+=e[t[a]];return s}when(){const t=new r,e=this.year-t.year,s=this._date.getMonth()-t._date.getMonth()+12*e,a=this._date.getDay()-t._date.getDay(),n=this._date.getHours()-t._date.getHours()+24*a;return s>11?`This is ${e} year(s) from now`:s<-11?`This was ${Math.abs(e)} year(s) ago`:s>0?`This is ${s} month(s) from now`:s<0?`This was ${Math.abs(s)} month(s) ago`:n>23?`This is ${Math.abs(a)} day(s) from now`:n<-23?`This was ${Math.abs(a)} day(s) ago`:"Enter a date: (Year, Month, Day, Hour, Minutes, Seconds)"}}return r}));
