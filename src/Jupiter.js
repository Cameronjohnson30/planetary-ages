export default class Jupiter {
  constructor(age, expectancy) {
    this.planet = "Jupiter";
    this.age = age;
    this.year = 11.86;
    this.JupiterAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0;
  }

  JupiterCalc() {
    let years = this.age / this.year;
    let planetAge = this.JupiterAge + years;
    return (this.JupiterAge = Math.round(planetAge));
  }

  JupiterLife() {
    let death = this.age - this.expectancy;
    if (death > 0) return (this.lifeClock = death);
    else if (death < 0) return (this.lifeClock = death * -1);
    else death === 0;
    return (this.lifeClock = death);
  }
}
