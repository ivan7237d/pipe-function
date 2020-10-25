export type UnaryFunction<From, To> = (source: From) => To;
export type MonoTypeUnaryFunction<T> = UnaryFunction<T, T>;
