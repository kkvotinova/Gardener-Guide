/* eslint-disable max-len */

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y;
type FromEntries<T> = T extends [infer Key, any][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1] }
  : { [key in string]: any };

type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>;

declare interface ObjectConstructor extends Omit<ObjectConstructor, 'keys' | 'entries'> {
  /**
   * Returns the names of the enumerable string properties and methods of an object.
   * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys<O extends any[]>(obj: O): Array<keyof O>;
  keys<O extends Record<Readonly<string>, any>>(obj: O): Array<keyof O>;
  keys(obj: Record<string, unknown>): string[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T extends { [K: Readonly<string>]: any }>(obj: T): Array<[keyof T, T[keyof T]]>;
  entries<T extends Record<string, unknown>>(
    obj: { [s: string]: T } | ArrayLike<T>,
  ): [string, T[keyof T]][];
  entries<T>(obj: { [s: string]: T } | ArrayLike<T>): [string, T][];
  entries(obj: Record<string, unknown>): [string, any][];

  fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>;
}

declare let Object: ObjectConstructor;
