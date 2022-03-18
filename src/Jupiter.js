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
    let death = (this.age - this.expectancy) / this.year;
    if (death > 0) {
      death = " lived " + Math.round(death) + " years past expectancy";
    } else if (death < 0) { 
      death =  Math.round(death) * -1 + " years left";
    } else {
      death = " less than a year";
    }
    return this.lifeClock = death;
  }
}