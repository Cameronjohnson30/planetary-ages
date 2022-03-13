import Mars from "../src/Mars";

describe("Mars", () => {
  test("should return Mars function", () => {
    let mars = new Mars(30, 30);
    expect(mars.planet).toEqual("Mars");
    expect(mars.age).toEqual(30);
    expect(mars.year).toEqual(1.88);
    expect(mars.MarsAge).toEqual(0);
    expect(mars.lifeClock).toEqual(0);
    expect(mars.expectancy).toEqual(30);
  });
});

describe("MarsCalc", () => {
  test("should convert earth age into Mars age", () => {
    let mars = new Mars(30);
    mars.MarsCalc();
    expect(mars.MarsAge).toEqual(16);
  });
});

describe("LifeClock", () => {
  test("should return the inputed years past life expentancy", () => {
    let mars = new Mars(30, 20);
    mars.MarsLife();
    expect(mars.lifeClock).toEqual(10);
  });

  test("should return the inputed life expentancy left", () => {
    let mars = new Mars(30, 40);
    mars.MarsLife();
    expect(mars.lifeClock).toEqual(10);
  });
  test("should return the inputed life expentancy zero", () => {
    let mars = new Mars(30, 30);
    mars.MarsLife();
    expect(mars.lifeClock).toEqual(0);
  });
});
