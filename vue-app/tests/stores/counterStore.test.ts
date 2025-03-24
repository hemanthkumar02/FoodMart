import { describe, it, expect } from "vitest";
import { useCounterStore } from "../../src/stores/counterStore";

describe("Counter Store", () => {
  it("increments count", () => {
    const store = useCounterStore();
    store.increment();
    expect(store.count).toBe(1);
  });

  it("decrements count", () => {
    const store = useCounterStore();
    store.count = 1;
    store.decrement();
    expect(store.count).toBe(0);
  });
});
