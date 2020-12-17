# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/ivan7237d/antiutils/compare/v1.0.3...v2.0.0) (2020-12-17)


### ⚠ BREAKING CHANGES

* assertNever is now asNever
* **view:** View's type shape has changed
* **react:** bindingProps and bindingPropsCheckbox have been moved to a separate package
* memoize() has been superceded by memoizeWeak(), memoizeStrong(), and teach()
* **array:** sliceArray and reverseArray now return arrays instead of iterables
* **iterable:** takeIterable has been removed - use sliceIterable
* countInIterable, everyInIterable and someInIterable have been removed, use
reduceIterable instead
* **iterable:** takeWhile operator has been removed
* **iterable:** Signatures of Reducer, reduce and scan have changed

### Features

* downcasting functions ([7039bc8](https://github.com/ivan7237d/antiutils/commit/7039bc8b9685159832127f73c93714a3309bf59f))
* **view:** better type shape for View ([36b1cf6](https://github.com/ivan7237d/antiutils/commit/36b1cf6908a92c7abc033daa801d72e57174dea7))
* better memoization utilities ([e5e15d3](https://github.com/ivan7237d/antiutils/commit/e5e15d3f22a1885699564d5279c1368781dd63b3))
* **array:** sliceReversedArray ([c4c1ff9](https://github.com/ivan7237d/antiutils/commit/c4c1ff9276b81578203f71180386342994c47f94))
* **iterable:** expandIterable ([5ae3daa](https://github.com/ivan7237d/antiutils/commit/5ae3daa954415fb7176ab2ab2081102c36cad298))
* **iterable:** lastInIterable ([abbe0fc](https://github.com/ivan7237d/antiutils/commit/abbe0fc305a7002098528eba61c40c91eeadfe8c))
* **iterable:** more powerful reduce and scan functions ([48de11a](https://github.com/ivan7237d/antiutils/commit/48de11a6c3eec35ed06e4ec3ffaf3e8db645f148))
* **iterable:** remove takeWhile operator since it's superceded by the better version of scan ([a65de89](https://github.com/ivan7237d/antiutils/commit/a65de89a7f1953f88aba913884792271be61e6d0))
* **iterable:** sliceIterable ([33d7c62](https://github.com/ivan7237d/antiutils/commit/33d7c625c6b17673b893286576a830000a9ff6d2))
* **lastInIterable:** better performance for arrays ([106569d](https://github.com/ivan7237d/antiutils/commit/106569d2f4277ebf4387919cabf64e5eb5823523))
* **sliceIterable:** use consistent way to check for array ([c738d6f](https://github.com/ivan7237d/antiutils/commit/c738d6f474cd727c98d1147d17b87ecb9ef2f193))
* reducers ([aa92215](https://github.com/ivan7237d/antiutils/commit/aa92215aebb985ce3cc06609ecb2b7db27fec38e))


### Bug Fixes

* remove broken re-exports ([9b2e391](https://github.com/ivan7237d/antiutils/commit/9b2e3918c6c8145fdc5d93131f33f788c05bc1b4))
* remove references to deleted functions ([1a70f97](https://github.com/ivan7237d/antiutils/commit/1a70f972cb46bb39235c1429309c9c86d7e3b447))


* **react:** move react-specific utilitites to own package ([1cf4838](https://github.com/ivan7237d/antiutils/commit/1cf4838d8907811eba4cde66db544f3ca340d2e5))

### [1.0.3](https://github.com/ivan7237d/antiutils/compare/v1.0.2...v1.0.3) (2020-12-04)


### Bug Fixes

* add missing export ([0001295](https://github.com/ivan7237d/antiutils/commit/00012953e386084afc655bdbd341f8e0e8bb1a67))

### [1.0.2](https://github.com/ivan7237d/antiutils/compare/v1.0.1...v1.0.2) (2020-12-04)

### [1.0.1](https://github.com/ivan7237d/antiutils/compare/v1.0.0...v1.0.1) (2020-11-29)


### Bug Fixes

* clean up changelog ([443d018](https://github.com/ivan7237d/antiutils/commit/443d01806a12d1715d60b66ade51a9a37b39fe79))

## 1.0.0 (2020-11-29)

First release.
