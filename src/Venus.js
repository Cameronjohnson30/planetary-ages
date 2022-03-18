export default class Venus {
  constructor(age, expectancy) {
    this.planet = "Venus";
    this.age = age;
    this.year = 0.62;
    this.VenusAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0;
  }

  VenusCalc() {
    let years = this.age / this.year;
    let planetAge = this.VenusAge + years;
    return (this.VenusAge = Math.round(planetAge));
  }

  VenusLife() {
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
