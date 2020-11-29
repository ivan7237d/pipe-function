# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2020-11-29)


### ⚠ BREAKING CHANGES

* **object:** setInObject and deleteFromObject have been removed
* **iterable:** anyInIterable was renamed to someInIterable
* **object:** objectToIterable is now objectEntries, iterableToObject is now objectFromEntries
* some utilities have been removed
* **object:** setInObject has new behavior consistent with object lens and setInMap
* **map:** setInMap now deletes a key if the passed value is undefined
* identityView was removed, readonly flag was added to functions that take arrays or
return arrays or objects.
* **object:** iterableToObject no longer discards undefined values
* **iterable:** Some functions have been renamed.
* **array:** reverseArrayIterable and sliceArrayIterable have been renamed to reverseArray and
sliceArray, overwriting previous implementation.

### Features

* **iterable:** better name for someInIterable ([e371a1b](https://github.com/obvibase/antiutils/commit/e371a1befb15b3feaf056019e7ee55d7b12d0ed9))
* **iterable:** countInIterable ([815b9d9](https://github.com/obvibase/antiutils/commit/815b9d943d1458b1ff392527ac880e382c0b43fe))
* **map:** make setInMap consistent with mapProp ([04dc255](https://github.com/obvibase/antiutils/commit/04dc2551219dfa63f1baf2860ed5309ac0977054))
* **memoize:** broaden type signature ([6f1d660](https://github.com/obvibase/antiutils/commit/6f1d66080cad1cb3aba2a8ffb40fd389ce83433a))
* **object:** add objectValues ([15c310d](https://github.com/obvibase/antiutils/commit/15c310d0e01d5f62e6df4b2c93759ef877aaf371))
* **object:** better names for some functions ([ad9c6a5](https://github.com/obvibase/antiutils/commit/ad9c6a5112cadaff9024b52edf25f17fc5a3e27a))
* **object:** better types ([da1ff2b](https://github.com/obvibase/antiutils/commit/da1ff2b0ce7c60bc695c780441b1fedafacbd9b2))
* **object:** remove unneeded functions ([cb9cbf3](https://github.com/obvibase/antiutils/commit/cb9cbf33fb3ce96a5baf31c95af9195ec7eb0f3a))
* better types ([13a68a0](https://github.com/obvibase/antiutils/commit/13a68a0e38e22c4c6f9dbbc127ce053ca8deb75a))
* broaden type signatures of some functions ([9f421cc](https://github.com/obvibase/antiutils/commit/9f421cc1946e49cbe1da27f1d62ed9b809bc6a36))
* **object:** broaden signature of setInObject ([8761684](https://github.com/obvibase/antiutils/commit/87616849c5b74c406954419caa1f645f1d84c9c7))
* trim API so that it does not duplicate native functionality ([45147f5](https://github.com/obvibase/antiutils/commit/45147f5f28e6533c94f1cea2bab4a5d692d83f9f))
* **view:** rootView helper function ([d75f889](https://github.com/obvibase/antiutils/commit/d75f889999dafcc546e9ba43bc8a2a6fccfcbd2b))
* assertNever function ([172b1ec](https://github.com/obvibase/antiutils/commit/172b1ec54092a376b72bfe571c867f796fd91440))
* broaden the signatures of map and set lenses ([6e4a023](https://github.com/obvibase/antiutils/commit/6e4a02353713e2468df41535393b46f79ed4dade))
* common types and a pipeline operator polyfill ([eb38260](https://github.com/obvibase/antiutils/commit/eb382602ff588a22ae360700ddcaa1f2c256ec96))
* equality functions ([f78fde4](https://github.com/obvibase/antiutils/commit/f78fde47bc7c78f1dc381609f20e2b1f1ba7cc4a))
* functions for working with arrays ([8cbba61](https://github.com/obvibase/antiutils/commit/8cbba612fd0eb3295bd66dd4754eb0581cfbb310))
* functions for working with maps and sets ([961d5f8](https://github.com/obvibase/antiutils/commit/961d5f82b576013056f7f1d6124fb525bcb96d8d))
* functions for working with native iterables ([6acde50](https://github.com/obvibase/antiutils/commit/6acde50b72473a55c80bac41b1977347b44945e4))
* functions for working with objects ([46e821b](https://github.com/obvibase/antiutils/commit/46e821b58107798568970533c86e673b55f34aa9))
* identity function ([ee0b1f0](https://github.com/obvibase/antiutils/commit/ee0b1f0f7da34e61f1f86fd0f18649defb22eb6c))
* memoize function ([59a6ea1](https://github.com/obvibase/antiutils/commit/59a6ea1367ce03f53a048f6c05814b6f569ae769))
* optics ([c5a491b](https://github.com/obvibase/antiutils/commit/c5a491b144db8067741deb136ec06a46e18f5ee2))
* utilities for using the library with React ([39fee3b](https://github.com/obvibase/antiutils/commit/39fee3bf06028f27b4bc52c386441e54148f7c38))
* **iterable:** more ergonomic function names ([ebfad72](https://github.com/obvibase/antiutils/commit/ebfad728f6c04a25a97b97e4b99e5335a401c3fa))
* **object:** add assertion to isObject ([b7f07c0](https://github.com/obvibase/antiutils/commit/b7f07c0ffa9c3183c3dbd0062a5f00fe6bb77310))
* **object:** functions to work with properties ([e41b2d1](https://github.com/obvibase/antiutils/commit/e41b2d13bc2322d35173e337d63f96a4e74a54fe))
* **object:** make iterableToObject consistent with Object.fromEntries ([0cf528c](https://github.com/obvibase/antiutils/commit/0cf528c56a00f1aa7ac007d80e7e2686316b1b84))
* reducer type ([9bd8896](https://github.com/obvibase/antiutils/commit/9bd88962f883b78ffe41827172ffaa2f025ef605))


### Bug Fixes

* **iterable:** fix signature of everyInIterable ([5224ed6](https://github.com/obvibase/antiutils/commit/5224ed661e219a466d98d5f75c6d70869bf29e7c))
* fix exports ([b4d48b5](https://github.com/obvibase/antiutils/commit/b4d48b530b8a55f3dcfcd9d38449a1ce4884b089))
* **array:** add exports to index.ts ([1318428](https://github.com/obvibase/antiutils/commit/13184282c3144839c6455d437242d9b049b02893))
* **array:** broaden signature of reverseArray ([8020398](https://github.com/obvibase/antiutils/commit/8020398a5c38c93c04908e1b8c7d7181e6221818))
* **array:** removed unneeded array functions ([acfe914](https://github.com/obvibase/antiutils/commit/acfe914052c8344216c4706d33899ecd99635b2d))
* **iterable:** add exports to index.ts ([11c5c87](https://github.com/obvibase/antiutils/commit/11c5c877abbc009ab2a18691c553f9d66ba34ba8))
* **iterable:** fix type of everyInIterable ([0d99cbe](https://github.com/obvibase/antiutils/commit/0d99cbe79b12781ac099526bbf892eb25c203250))
* **object:** fix type for functions that iterate over object keys ([476b2d6](https://github.com/obvibase/antiutils/commit/476b2d6515c27963fd0467e8b01e26e9448403eb))
* **object:** fix type of iterableToObject ([d337b2a](https://github.com/obvibase/antiutils/commit/d337b2ad16a28877d66cf278f46868dafce58524))
* **object:** update exports ([bd5792e](https://github.com/obvibase/antiutils/commit/bd5792ea97b6b6f913c0699eb62e4ca5b16917a7))
* fix exports ([4f003a2](https://github.com/obvibase/antiutils/commit/4f003a240b0a220785aecb2e42ee7638254c73f1))
* fix exports ([f9afc9d](https://github.com/obvibase/antiutils/commit/f9afc9d563f4ac78308fbb494d2ffe6939164456))
* fix exports ([c77c7c0](https://github.com/obvibase/antiutils/commit/c77c7c01a339f045fefc329e2ec10374e7b0ea6a))
