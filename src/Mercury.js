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
