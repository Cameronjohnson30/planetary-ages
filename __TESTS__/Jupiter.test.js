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

describe ('JupiterCalc' , () => {
  test( "should convert earth age into Jupiter age" , () => {
  let jupiter = new Jupiter(30,);
  jupiter.JupiterCalc();
  expect(jupiter.JupiterAge).toEqual(3);
})
})

escribe ('LifeClock' , () => {
  test("should return the inputed years past life expentancy" , () =>{
    let jupitar = new Jupitar(30, 20)
    jupitar.JupitarLife();
    expect(jupitar.deathClock).toEqual(10)
  })

  test("should return the inputed life expentancy left" , () =>{
    let jupitar = new Jupitar(30, 40)
    jupitar.JupitarLife();
    expect(jupitar.deathClock).toEqual(10)
  })
  test("should return the inputed life expentancy zero" , () =>{
    let jupitar = new Jupitar(30, 30)
    jupitar.JupitarLife();
    expect(jupitar.deathClock).toEqual(0)
  })

})