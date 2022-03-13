export default class Mercury {
  constructor(age) {
    this.planet = 'Mercury';
    this.age = age;
    this.year = .24;
    this.MercuryAge = 0;
  }
  MercuryCalc() {
    let years = this.age / this.year; 
    return this.MercuryAge = this.MercuryAge + years;
  }
}