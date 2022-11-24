import assertNever from "./assertNever";

test("", () => {
  // At least 1 arg required.
  expect(() =>
    // @ts-expect-error
    assertNever()
  ).toThrowErrorMatchingInlineSnapshot(`"assertNever must never be called."`);

  type A = "a1";

  (a: A) => (a === "a1" ? 1 : assertNever(a));

  type B = "b1";

  (a: A, b: B) => (a === "a1" || b === "b1" ? 1 : assertNever(a, b));

  type C = "c1" | "c2";

  // Passing non-never argument.
  const f = (c: C) =>
    c === "c1"
      ? 1
      : // @ts-expect-error
        assertNever(c);

  expect(() => f("c2")).toThrowError();
});
