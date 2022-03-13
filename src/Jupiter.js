export default class Jupiter {
  constructor(age, expectancy) {
    this.planet = 'Jupiter';
    this.age = age;
    this.year = 11.86;
    this.JupiterAge = 0;
    this.expectancy = expectancy;
    this.deathClock = 0; 
  }

  JupiterCalc() {
    let years = this.age / this.year; 
    let planetAge = this.JupiterAge + years;
    return this.JupiterAge = Math.round(planetAge);
  }
}
