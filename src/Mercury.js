export default class Mercury {
  constructor(age, expectancy) {
    this.planet = "Mercury";
    this.age = age;
    this.year = 0.24;
    this.MercuryAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0;
  }
  MercuryCalc() {
    let years = this.age / this.year;
    return (this.MercuryAge = this.MercuryAge + years);
  }

  MercuryLife() {
    let death = this.age - this.expectancy;
    if (death > 0) return (this.lifeClock = death);
    else if (death < 0) return (this.lifeClock = death * -1);
    else death === 0;
    return (this.lifeClock = death);
  }
}
