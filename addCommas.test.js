const addCommas = require("./madlibs-app/src/addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});
describe("add commas function", () => {
test('adds commas properly', () => {
  expect(addCommas(1234)).toBe('1,234')
  expect(addCommas(1000000)).toBe('1,000,000')
  expect(addCommas(9876543210)).toBe('9,876,543,210')
  expect(addCommas(6)).toBe('6')
  expect(addCommas(-10)).toBe('-10')
  expect(addCommas(-5678)).toBe('-5,678')
});
});

