import { countDown } from "./index.js";

describe("test countdown", () => {
  const num = 1.5;
  it("work correctly with positive integer", () => {
    expect(countDown(num)).toBe('5 4 3 2 1');
  }),
  it("work correctly with zero", () => {
    expect(countDown(num)).toBe('Введите целое число больше нуля!');
  }),
  it("work correctly with negative integer", () => {
    expect(countDown(num)).toBe('Введите целое число больше нуля!');
  }),
  it("work correctly with double", () => {
    expect(countDown(num)).toBe('Введите целое число больше нуля!');
  });
});
