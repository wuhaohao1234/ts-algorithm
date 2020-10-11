import { sum } from "../src/foo";

test("basic", () => {
  expect(sum(1, 2)).toBe(3);
});
