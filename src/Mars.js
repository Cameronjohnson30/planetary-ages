export default class Mars {
  constructor(age, expectancy) {
    this.planet = "Mars";
    this.age = age;
    this.year = 1.88;
    this.MarsAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0;
  }

  MarsCalc() {
    let years = this.age / this.year;
    let planetAge = this.MarsAge + years;
    return (this.MarsAge = Math.round(planetAge));
  }

  MarsLife() {
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
