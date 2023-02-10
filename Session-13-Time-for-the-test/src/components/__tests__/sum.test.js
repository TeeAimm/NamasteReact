import { Sum } from "../Sum"

test('should add two numbers', () => {
  expect(Sum(3,2)).toBe(5)
  expect(Sum(3,-2)).toBe(1)
})
