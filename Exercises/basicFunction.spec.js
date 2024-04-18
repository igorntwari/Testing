const { sum } = require("./basicFunctions");

describe("sum function functionality", () => {
  test("should return the sum of Two positive numbers", () => {
    expect(sum(3, 4)).toBe(7);
  });

  test("it should return the sum of the negative numbers", () => {
    expect(sum(54, -1)).toBe(53);
  });

  test("return the sum of number and 0", () => {
    expect(sum(0, 2)).toBe(2);
  });

  test("return the sum of 0 and number", () => {
    expect(sum(66, 0)).toBe(66);
  });
});
