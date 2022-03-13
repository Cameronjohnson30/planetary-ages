import Mars from '../src/Mars';

describe  ('Mars' , () => {

  test( "should return Mars function" , () => {
    let mars = new Mars(30);
    expect(mars.planet).toEqual("Mars");
    expect(mars.age).toEqual(30);
    expect(mars.year).toEqual(1.88);
    expect(mars.MarsAge).toEqual(0);
  })
})
describe ('MarsCalc' , () => {
  test( "should convert earth age into Mars age" , () => {
  let mars = new Mars(30);
  mars.MarsCalc();
  expect(mars.MarsAge).toEqual(16);
})
})
