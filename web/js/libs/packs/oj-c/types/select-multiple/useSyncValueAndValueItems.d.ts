import { ItemContext } from 'ojs/ojcommontypes';
import { DataProvider } from 'ojs/ojdataprovider';
import { StateUpdater } from 'preact/hooks';
declare type Optional<T> = T | null | undefined;
declare type Value<K> = Optional<Set<K>>;
declare type ValueItems<K, D> = Optional<Map<K, ItemContext<K, D>>>;
export declare type UseSyncValueAndValueItemsProps<K, D> = {
    addBusyState: (desc?: string) => () => void;
    dataProvider?: Optional<DataProvider<K, D>>;
    setIsLoading: StateUpdater<boolean>;
    setValue: StateUpdater<Value<K>>;
    setValueItems: (value: ValueItems<K, D>) => void;
    value?: Value<K>;
    valueItems?: ValueItems<K, D>;
};
export declare function useSyncValueAndValueItems<K extends string | number, D extends Record<string, any>>({ addBusyState, dataProvider, setIsLoading, setValue, setValueItems, value, valueItems }: UseSyncValueAndValueItemsProps<K, D>): void;
export {};
