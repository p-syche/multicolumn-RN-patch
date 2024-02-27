# Patched multicolumn FlatList layout snack app

This a patched version of this Snack: https://snack.expo.dev/@p-syche/multicolumn

The original snack was a multicolumn FlatList layout, but it had a bug that caused the items to unmount and mount unnecessarily. This version fixes that bug.

## How to run

`yarn start` or `expo start`

## What's different from the snack?

This repo includes a patch for React Native (located [here](https://github.com/p-syche/multicolumn-RN-patch/blob/main/patches/react-native%2B0.71.14.patch) ). This demonstrates the fix for the issue described in this [PR](https://github.com/facebook/react-native/pull/43205).
