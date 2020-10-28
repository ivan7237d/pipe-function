export const flatMapIterable = <From, To>(
  project: (value: From) => Iterable<To>,
) =>
  function* (source: Iterable<From>): Iterable<To> {
    for (const value of source) {
      for (const projected of project(value)) {
        yield projected;
      }
    }
  };
