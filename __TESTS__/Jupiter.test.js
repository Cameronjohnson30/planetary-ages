import Jupitar from '../src/Jupitar';

describe  ('Jupitar' , () => {

  test( "should return Jupitar function" , () => {
    let jupitar = new Jupitar(30, 30);
    expect(jupitar.planet).toEqual("Jupitar");
    expect(jupitar.age).toEqual(30);
    expect(jupitar.year).toEqual(11.86);
    expect(jupitar.JupitarAge).toEqual(0);
    expect(jupitar.expectancy).toEqual(30);
    expect(jupitar.deathClock).toEqual(0)
  })
})
