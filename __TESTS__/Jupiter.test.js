import Jupiter from '../src/Jupiter';

describe  ('Jupiter' , () => {

  test( "should return Jupiter function" , () => {
    let jupiter = new Jupiter(30, 30);
    expect(jupiter.planet).toEqual("Jupiter");
    expect(jupiter.age).toEqual(30);
    expect(jupiter.year).toEqual(11.86);
    expect(jupiter.JupiterAge).toEqual(0);
    expect(jupiter.expectancy).toEqual(30);
    expect(jupiter.deathClock).toEqual(0)
  })
})

describe ('JupitarCalc' , () => {
  test( "should convert earth age into Jupitar age" , () => {
  let jupitar = new Jupitar(30,);
  jupitar.JupitarCalc();
  expect(jupitar.JupitarAge).toEqual(3);
})
})
