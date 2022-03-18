import Mercury from "../src/Mercury";

describe("Mercury", () => {
  test("should return Mercury function", () => {
    let mercury = new Mercury(30);
    expect(mercury.age).toEqual(30);
    expect(mercury.year).toEqual(0.24);
    expect(mercury.MercuryAge).toEqual(0);
  });
});

describe("MercuryCalc", () => {
  test("should convert earth age into mercury age", () => {
    let mercury = new Mercury(30);
    mercury.MercuryCalc();
    expect(mercury.MercuryAge).toEqual(125);
  });
});

describe("LifeClock", () => {
  test("should return the inputed years past life expentancy", () => {
    let mercury = new Mercury(30, 20);
    mercury.MercuryLife();
    expect(mercury.lifeClock).toEqual(" lived 42 years past expectancy");
  });

  test("should return the inputed life expentancy left", () => {
    let mercury = new Mercury(30, 40);
    mercury.MercuryLife();
    expect(mercury.lifeClock).toEqual("42 years left");
  });

  test("should return the inputed life expentancy zero", () => {
    let mercury = new Mercury(30, 30);
    mercury.MercuryLife();
    expect(mercury.lifeClock).toEqual(" less than a year");
  });
});
