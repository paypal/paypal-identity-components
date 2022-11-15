/* @flow */

export type LazyExport<T> = {|
  __get__: () => T,
|};

export type LazyProtectedExport<T> = {|
  __get__: () => ?T,
|};
