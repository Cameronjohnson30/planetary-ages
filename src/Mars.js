export default class Mars {
  constructor(age, expectancy) {
    this.planet = 'Mars';
    this.age = age;
    this.year = 1.88;
    this.MarsAge = 0;
    this.expectancy = expectancy;
    this.lifeClock = 0;
  }

MarsCalc() {
  let years = this.age / this.year; 
  let planetAge = this.MarsAge + years;
  return this.MarsAge = Math.round(planetAge);
}


MarsLife() {
  let death =this.age - this.expectancy; 
  if (death > 0)
    return this.lifeClock = death;
  else if (death < 0)
    return this.lifeClock = death * -1;
  else (death === 0);
  return this.lifeClock = death;
}
}