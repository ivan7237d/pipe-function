# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/ivan7237d/antiutils/compare/v2.0.1...v2.1.0) (2021-01-04)


### Features

* **iterable:** reverseIterable ([94a24be](https://github.com/ivan7237d/antiutils/commit/94a24beb6716d438f5d6f7115f1e38fe035e4ee6))
* **iterable:** sliceReversedIterable ([30bf7f5](https://github.com/ivan7237d/antiutils/commit/30bf7f57d2061ecf026ae3609d5fd3895f28d4a7))


### Bug Fixes

* **rangeIterable:** correctly handle non-positive step ([19c83ec](https://github.com/ivan7237d/antiutils/commit/19c83ec74ab22e76b8c14265452870c7c2266dd9))

### [2.0.1](https://github.com/ivan7237d/antiutils/compare/v2.0.0...v2.0.1) (2021-01-03)


### Bug Fixes

* add missing exports ([ea3c82c](https://github.com/ivan7237d/antiutils/commit/ea3c82c53c90a0ade00d98c144dcb0f8efba4cca))

## [2.0.0](https://github.com/ivan7237d/antiutils/compare/v1.0.3...v2.0.0) (2020-12-17)

### ⚠ BREAKING CHANGES

- assertNever is now asNever
- **view:** View's type shape has changed
- **react:** bindingProps and bindingPropsCheckbox have been moved to a separate package
- memoize() has been superceded by memoizeWeak(), memoizeStrong(), and teach()
- **array:** sliceArray and reverseArray now return arrays instead of iterables
- **iterable:** takeIterable has been removed - use sliceIterable
- countInIterable, everyInIterable and someInIterable have been removed, use
  reduceIterable instead
- **iterable:** takeWhile operator has been removed
- **iterable:** Signatures of Reducer, reduce and scan have changed

### Features

- downcasting functions ([7039bc8](https://github.com/ivan7237d/antiutils/commit/7039bc8b9685159832127f73c93714a3309bf59f))
- **view:** better type shape for View ([36b1cf6](https://github.com/ivan7237d/antiutils/commit/36b1cf6908a92c7abc033daa801d72e57174dea7))
- better memoization utilities ([e5e15d3](https://github.com/ivan7237d/antiutils/commit/e5e15d3f22a1885699564d5279c1368781dd63b3))
- **array:** sliceReversedArray ([c4c1ff9](https://github.com/ivan7237d/antiutils/commit/c4c1ff9276b81578203f71180386342994c47f94))
- **iterable:** expandIterable ([5ae3daa](https://github.com/ivan7237d/antiutils/commit/5ae3daa954415fb7176ab2ab2081102c36cad298))
- **iterable:** lastInIterable ([abbe0fc](https://github.com/ivan7237d/antiutils/commit/abbe0fc305a7002098528eba61c40c91eeadfe8c))
- **iterable:** more powerful reduce and scan functions ([48de11a](https://github.com/ivan7237d/antiutils/commit/48de11a6c3eec35ed06e4ec3ffaf3e8db645f148))
- **iterable:** sliceIterable ([33d7c62](https://github.com/ivan7237d/antiutils/commit/33d7c625c6b17673b893286576a830000a9ff6d2))
- **lastInIterable:** better performance for arrays ([106569d](https://github.com/ivan7237d/antiutils/commit/106569d2f4277ebf4387919cabf64e5eb5823523))
- **sliceIterable:** use consistent way to check for array ([c738d6f](https://github.com/ivan7237d/antiutils/commit/c738d6f474cd727c98d1147d17b87ecb9ef2f193))
- reducers ([aa92215](https://github.com/ivan7237d/antiutils/commit/aa92215aebb985ce3cc06609ecb2b7db27fec38e))

## 1.0.0 (2020-11-29)

First release.
