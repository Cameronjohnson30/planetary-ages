export default class Venus {
  constructor(age) {
    this.planet = 'Venus';
    this.age = age;
    this.year = .62;
    this.VenusAge = 0;
  }

  VenusCalc() {
    let years = this.age / this.year; 
    let planetAge = this.VenusAge + years;
    return this.VenusAge = Math.round(planetAge);
  }
}