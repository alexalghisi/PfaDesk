import { MIN_WAGE_2026, pfaSketch } from "./pfa";

test("below six wages, uninsured CASS still sits on the floor", () => {
  const sketch = pfaSketch(20_000, false);
  expect(sketch.cassBase).toBe(6 * MIN_WAGE_2026);
  expect(sketch.cass).toBe(2_430);
  expect(sketch.cas).toBe(0);
});

test("employee health drops the CASS floor", () => {
  const sketch = pfaSketch(20_000, true);
  expect(sketch.cassBase).toBe(20_000);
  expect(sketch.cass).toBe(2_000);
});

test("twelve wages trips the 12-SM CAS ticket", () => {
  const sketch = pfaSketch(12 * MIN_WAGE_2026, false);
  expect(sketch.cas).toBe(12_150);
});

test("twenty-four wages trips the 24-SM CAS ticket", () => {
  const sketch = pfaSketch(24 * MIN_WAGE_2026, false);
  expect(sketch.cas).toBe(24_300);
});
