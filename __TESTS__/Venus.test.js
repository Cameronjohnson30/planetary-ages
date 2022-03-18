import Venus from "../src/Venus";

describe("Venus", () => {
  test("should return Venus function", () => {
    let venus = new Venus(30);
    expect(venus.planet).toEqual("Venus");
    expect(venus.age).toEqual(30);
    expect(venus.year).toEqual(0.62);
    expect(venus.VenusAge).toEqual(0);
  });
});

describe("VenusCalc", () => {
  test("should convert earth age into venus age", () => {
    let venus = new Venus(30);
    venus.VenusCalc();
    expect(venus.VenusAge).toEqual(48);
  });
});

describe("LifeClock", () => {
  test("should return the inputed years past life expentancy", () => {
    let venus = new Venus(30, 20);
    venus.VenusLife();
    expect(venus.lifeClock).toEqual(" lived 16 years past expectancy");
  });

  test("should return the inputed life expentancy left", () => {
    let venus = new Venus(30, 40);
    venus.VenusLife();
    expect(venus.lifeClock).toEqual("16 years left");
  });
  test("should return the inputed life expentancy zero", () => {
    let venus = new Venus(30, 30);
    venus.VenusLife();
    expect(venus.lifeClock).toEqual(" less than a year");
  });
});
