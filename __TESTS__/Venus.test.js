import Venus from '../src/Venus';

describe  ('Venus' , () => {

  test( "should return Venus function" , () => {
    let venus = new Venus(30);
    expect(venus.planet).toEqual("Venus");
    expect(venus.age).toEqual(30);
    expect(venus.year).toEqual(.62);
    expect(venus.VenusAge).toEqual(0);
  })
})
