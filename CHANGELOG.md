# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [9.0.0](https://github.com/obvibase/utils/compare/v8.1.0...v9.0.0) (2020-11-12)


### ⚠ BREAKING CHANGES

* **iterable:** anyInIterable was renamed to someInIterable

### Features

* **iterable:** better name for someInIterable ([e371a1b](https://github.com/obvibase/utils/commit/e371a1befb15b3feaf056019e7ee55d7b12d0ed9))
* **iterable:** countInIterable ([815b9d9](https://github.com/obvibase/utils/commit/815b9d943d1458b1ff392527ac880e382c0b43fe))
* broaden type signatures of some functions ([9f421cc](https://github.com/obvibase/utils/commit/9f421cc1946e49cbe1da27f1d62ed9b809bc6a36))

## [8.1.0](https://github.com/obvibase/utils/compare/v8.0.0...v8.1.0) (2020-11-11)


### Features

* **object:** broaden signature of setInObject ([8761684](https://github.com/obvibase/utils/commit/87616849c5b74c406954419caa1f645f1d84c9c7))

## [8.0.0](https://github.com/obvibase/utils/compare/v7.0.1...v8.0.0) (2020-11-10)


### ⚠ BREAKING CHANGES

* **object:** objectToIterable is now objectEntries, iterableToObject is now objectFromEntries

### Features

* **object:** better names for some functions ([ad9c6a5](https://github.com/obvibase/utils/commit/ad9c6a5112cadaff9024b52edf25f17fc5a3e27a))


### Bug Fixes

* **object:** fix type for functions that iterate over object keys ([476b2d6](https://github.com/obvibase/utils/commit/476b2d6515c27963fd0467e8b01e26e9448403eb))

### [7.0.1](https://github.com/obvibase/utils/compare/v7.0.0...v7.0.1) (2020-11-10)


### Bug Fixes

* **object:** fix type of iterableToObject ([d337b2a](https://github.com/obvibase/utils/commit/d337b2ad16a28877d66cf278f46868dafce58524))

## [7.0.0](https://github.com/obvibase/utils/compare/v6.0.0...v7.0.0) (2020-11-10)


### ⚠ BREAKING CHANGES

* some utilities have been removed

### Features

* trim API so that it does not duplicate native functionality ([45147f5](https://github.com/obvibase/utils/commit/45147f5f28e6533c94f1cea2bab4a5d692d83f9f))
* **view:** rootView helper function ([d75f889](https://github.com/obvibase/utils/commit/d75f889999dafcc546e9ba43bc8a2a6fccfcbd2b))

## [6.0.0](https://github.com/obvibase/utils/compare/v5.0.1...v6.0.0) (2020-11-07)


### ⚠ BREAKING CHANGES

* **object:** setInObject has new behavior consistent with object lens and setInMap

### Features

* **object:** better types ([da1ff2b](https://github.com/obvibase/utils/commit/da1ff2b0ce7c60bc695c780441b1fedafacbd9b2))

### [5.0.1](https://github.com/obvibase/utils/compare/v5.0.0...v5.0.1) (2020-11-06)

## [5.0.0](https://github.com/obvibase/utils/compare/v4.1.0...v5.0.0) (2020-11-06)


### ⚠ BREAKING CHANGES

* **map:** setInMap now deletes a key if the passed value is undefined

### Features

* **map:** make setInMap consistent with mapProp ([04dc255](https://github.com/obvibase/utils/commit/04dc2551219dfa63f1baf2860ed5309ac0977054))
* broaden the signatures of map and set lenses ([6e4a023](https://github.com/obvibase/utils/commit/6e4a02353713e2468df41535393b46f79ed4dade))


### Bug Fixes

* **array:** broaden signature of reverseArray ([8020398](https://github.com/obvibase/utils/commit/8020398a5c38c93c04908e1b8c7d7181e6221818))

## [4.1.0](https://github.com/obvibase/utils/compare/v4.0.0...v4.1.0) (2020-11-03)


### Features

* assertNever function ([172b1ec](https://github.com/obvibase/utils/commit/172b1ec54092a376b72bfe571c867f796fd91440))
* memoize function ([59a6ea1](https://github.com/obvibase/utils/commit/59a6ea1367ce03f53a048f6c05814b6f569ae769))
* utilities for using the library with React ([39fee3b](https://github.com/obvibase/utils/commit/39fee3bf06028f27b4bc52c386441e54148f7c38))

## [4.0.0](https://github.com/obvibase/utils/compare/v3.0.0...v4.0.0) (2020-11-02)


### ⚠ BREAKING CHANGES

* identityView was removed, readonly flag was added to functions that take arrays or
return arrays or objects.

### Features

* better types ([13a68a0](https://github.com/obvibase/utils/commit/13a68a0e38e22c4c6f9dbbc127ce053ca8deb75a))
* **object:** add assertion to isObject ([b7f07c0](https://github.com/obvibase/utils/commit/b7f07c0ffa9c3183c3dbd0062a5f00fe6bb77310))
* equality functions ([f78fde4](https://github.com/obvibase/utils/commit/f78fde47bc7c78f1dc381609f20e2b1f1ba7cc4a))
* functions for working with maps and sets ([961d5f8](https://github.com/obvibase/utils/commit/961d5f82b576013056f7f1d6124fb525bcb96d8d))


### Bug Fixes

* **iterable:** fix type of everyInIterable ([0d99cbe](https://github.com/obvibase/utils/commit/0d99cbe79b12781ac099526bbf892eb25c203250))
* fix exports ([4f003a2](https://github.com/obvibase/utils/commit/4f003a240b0a220785aecb2e42ee7638254c73f1))

## [3.0.0](https://github.com/obvibase/utils/compare/v2.0.0...v3.0.0) (2020-11-01)


### ⚠ BREAKING CHANGES

* **object:** iterableToObject no longer discards undefined values

### Features

* optics ([c5a491b](https://github.com/obvibase/utils/commit/c5a491b144db8067741deb136ec06a46e18f5ee2))
* **object:** add objectValues ([15c310d](https://github.com/obvibase/utils/commit/15c310d0e01d5f62e6df4b2c93759ef877aaf371))
* **object:** functions to work with properties ([e41b2d1](https://github.com/obvibase/utils/commit/e41b2d13bc2322d35173e337d63f96a4e74a54fe))
* **object:** make iterableToObject consistent with Object.fromEntries ([0cf528c](https://github.com/obvibase/utils/commit/0cf528c56a00f1aa7ac007d80e7e2686316b1b84))


### Bug Fixes

* fix exports ([f9afc9d](https://github.com/obvibase/utils/commit/f9afc9d563f4ac78308fbb494d2ffe6939164456))
* fix exports ([c77c7c0](https://github.com/obvibase/utils/commit/c77c7c01a339f045fefc329e2ec10374e7b0ea6a))

## [2.0.0](https://github.com/obvibase/utils/compare/v1.4.0...v2.0.0) (2020-10-30)


### ⚠ BREAKING CHANGES

* **iterable:** Some functions have been renamed.
* **array:** reverseArrayIterable and sliceArrayIterable have been renamed to reverseArray and
sliceArray, overwriting previous implementation.

### Features

* **iterable:** more ergonomic function names ([ebfad72](https://github.com/obvibase/utils/commit/ebfad728f6c04a25a97b97e4b99e5335a401c3fa))


### Bug Fixes

* **array:** removed unneeded array functions ([acfe914](https://github.com/obvibase/utils/commit/acfe914052c8344216c4706d33899ecd99635b2d))

## [1.4.0](https://github.com/obvibase/utils/compare/v1.3.1...v1.4.0) (2020-10-30)


### Features

* functions for working with objects ([46e821b](https://github.com/obvibase/utils/commit/46e821b58107798568970533c86e673b55f34aa9))
* identity function ([ee0b1f0](https://github.com/obvibase/utils/commit/ee0b1f0f7da34e61f1f86fd0f18649defb22eb6c))

### [1.3.1](https://github.com/obvibase/utils/compare/v1.3.0...v1.3.1) (2020-10-29)


### Bug Fixes

* **array:** add exports to index.ts ([1318428](https://github.com/obvibase/utils/commit/13184282c3144839c6455d437242d9b049b02893))

## [1.3.0](https://github.com/obvibase/utils/compare/v1.2.1...v1.3.0) (2020-10-29)


### Features

* functions for working with arrays ([8cbba61](https://github.com/obvibase/utils/commit/8cbba612fd0eb3295bd66dd4754eb0581cfbb310))

### [1.2.1](https://github.com/obvibase/utils/compare/v1.2.0...v1.2.1) (2020-10-28)


### Bug Fixes

* **iterable:** add exports to index.ts ([11c5c87](https://github.com/obvibase/utils/commit/11c5c877abbc009ab2a18691c553f9d66ba34ba8))

## [1.2.0](https://github.com/obvibase/utils/compare/v1.1.0...v1.2.0) (2020-10-28)


### Features

* functions for working with native iterables ([6acde50](https://github.com/obvibase/utils/commit/6acde50b72473a55c80bac41b1977347b44945e4))
* reducer type ([9bd8896](https://github.com/obvibase/utils/commit/9bd88962f883b78ffe41827172ffaa2f025ef605))

## [1.1.0](https://github.com/obvibase/utils/compare/v1.0.1...v1.1.0) (2020-10-25)


### Features

* common types and a pipeline operator polyfill ([eb38260](https://github.com/obvibase/utils/commit/eb382602ff588a22ae360700ddcaa1f2c256ec96))

### 1.0.1 (2020-10-24)
