export declare type Optional<T> = T | null | undefined;
export declare type MaybeMap<K, T> = Optional<T> | Map<K, T>;
export declare type MaybeSet<T> = Optional<T> | Set<T>;
declare type MaybeArray<T> = Optional<T | T[]>;
export declare const DEFAULT_ITEM_CONTEXT: null;
export declare const DEFAULT_VALUE: null;
export declare const DEFAULT_VALUE_ITEM: null;
export declare const DEFAULT_VALUE_ITEMS: null;
export declare function isEmpty<K, T>(value: MaybeArray<K> | MaybeMap<K, T> | MaybeSet<K>): boolean;
export {};
