export const mapIterable = <From, To>(project: (value: From) => To) =>
  function* (iterable: Iterable<From>): Iterable<To> {
    for (const value of iterable) {
      yield project(value);
    }
  };
