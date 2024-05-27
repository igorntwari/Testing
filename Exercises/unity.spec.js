const { sum } = require("./basicFunctions");
const { fetchUserData } = require("./asynfunction");

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

it("it should handles a successful API call correctly", async () => {
  const data = await fetchUserData();
  expect(data).toStrictEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
  });
});

it('Verify the function appropriately manages an API call that fails',async ()=> {
 await expect(fetchUserData())
 .rejects
 .toThrow('it should throw an error message')
})