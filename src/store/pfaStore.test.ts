import { usePfaStore } from "./pfaStore";

test("defaults to an 80k sistem-real year", () => {
  expect(usePfaStore.getState().netLei).toBe(80_000);
  usePfaStore.getState().setNetLei(48_600);
  expect(usePfaStore.getState().netLei).toBe(48_600);
  usePfaStore.getState().setNetLei(80_000);
});
