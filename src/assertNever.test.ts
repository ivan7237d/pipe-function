import { assertNever } from "./assertNever";

test("", () => {
  type A = "a1";

  (a: A) =>
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    a === "a1" ? 1 : assertNever();
  (a: A) =>
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    a === "a1" ? 1 : assertNever(a);

  type B = "b1";

  (a: A, b: B) =>
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    a === "a1" || b === "b1" ? 1 : assertNever(a, b);

  type C = "c1" | "c2";

  // Passing non-never argument.
  const f = (c: C) =>
    c === "c1"
      ? 1
      : // @ts-expect-error
        assertNever(c);

  expect(() => f("c2")).toThrowErrorMatchingInlineSnapshot(
    `"assertNever must never be called."`
  );
});
