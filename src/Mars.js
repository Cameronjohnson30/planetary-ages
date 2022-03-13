export default class Mars {
  constructor(age) {
    this.planet = 'Mars';
    this.age = age;
    this.year = 1.88;
    this.MarsAge = 0;
  }

MarsCalc() {
  let years = this.age / this.year; 
  let planetAge = this.MarsAge + years;
  return this.MarsAge = Math.round(planetAge);
}
}