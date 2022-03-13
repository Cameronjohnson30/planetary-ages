import Mercury from '../src/Mercury';

describe  ('Mercury' , () => {

  test( "should return Mercury function" , () => {
    let mercury = new Mercury(30);
    expect(mercury.age).toEqual(30);
    expect(mercury.year).toEqual(.24);
    expect(mercury.MercuryAge).toEqual(0);
  })
})

describe ('MercuryCalc' , () => {
  test( "should convert earth age into mercury age" , () => {
  let mercury = new Mercury(30);
  mercury.MercuryCalc();
  expect(mercury.MercuryAge).toEqual(125);
})
})
