# Changelog

## [1.0.1]

Type signature changed in such a way that when you write `const y = pipe(x)`, you still get a type error, but the type of `y` is inferred as type of `x` instead of `unknown`.
