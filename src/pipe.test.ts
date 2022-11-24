import pipe from "./pipe";

const addSuffix =
  <Suffix extends string>(suffix: Suffix) =>
  <Base extends string>(base: Base): `${Base}-${Suffix}` =>
    `${base}-${suffix}`;

test("", () => {
  // @ts-expect-error
  expect(pipe("base")).toMatchInlineSnapshot(`"base"`);

  expect(
    // $ExpectType "base-a"
    pipe("base" as const, addSuffix("a"))
  ).toMatchInlineSnapshot(`"base-a"`);

  // $ExpectType "base-a-b"
  pipe("base" as const, addSuffix("a"), addSuffix("b"));

  // $ExpectType "base-a-b-c"
  pipe("base" as const, addSuffix("a"), addSuffix("b"), addSuffix("c"));

  // $ExpectType "base-a-b-c-d"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d")
  );

  // $ExpectType "base-a-b-c-d-e"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e")
  );

  // $ExpectType "base-a-b-c-d-e-f"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e"),
    addSuffix("f")
  );

  // $ExpectType "base-a-b-c-d-e-f-g"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e"),
    addSuffix("f"),
    addSuffix("g")
  );

  // $ExpectType "base-a-b-c-d-e-f-g-h"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e"),
    addSuffix("f"),
    addSuffix("g"),
    addSuffix("h")
  );

  // $ExpectType "base-a-b-c-d-e-f-g-h-i"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e"),
    addSuffix("f"),
    addSuffix("g"),
    addSuffix("h"),
    addSuffix("i")
  );

  // $ExpectType "base-a-b-c-d-e-f-g-h-i-j"
  pipe(
    "base" as const,
    addSuffix("a"),
    addSuffix("b"),
    addSuffix("c"),
    addSuffix("d"),
    addSuffix("e"),
    addSuffix("f"),
    addSuffix("g"),
    addSuffix("h"),
    addSuffix("i"),
    addSuffix("j")
  );

  expect(
    // $ExpectType "base-a-b-c-d-e-f-g-h-i-j-k"
    pipe(
      "base" as const,
      addSuffix("a"),
      addSuffix("b"),
      addSuffix("c"),
      addSuffix("d"),
      addSuffix("e"),
      addSuffix("f"),
      addSuffix("g"),
      addSuffix("h"),
      addSuffix("i"),
      addSuffix("j"),
      addSuffix("k")
    )
  ).toMatchInlineSnapshot(`"base-a-b-c-d-e-f-g-h-i-j-k"`);
});
