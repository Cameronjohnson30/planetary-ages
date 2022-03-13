export default class Venus {
  constructor(age, expectancy) {
    this.planet = 'Venus';
    this.age = age;
    this.year = .62;
    this.VenusAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0; 
  }

  VenusCalc() {
    let years = this.age / this.year; 
    let planetAge = this.VenusAge + years;
    return this.VenusAge = Math.round(planetAge);
  }

  VenusLife() {
    let death =this.age - this.expectancy; 
    if (death > 0)
      return this.lifeClock = death;
    else if (death < 0)
      return this.lifeClock = death * -1;
    else (death === 0);
    return this.lifeClock = death;
  }
  }