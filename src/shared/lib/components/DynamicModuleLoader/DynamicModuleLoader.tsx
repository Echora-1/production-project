import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer]
interface DynamicModuleLoaderProps {
    reducers: ReducersList;

    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers)
            .forEach(([name, reducer]: ReducersListEntry) => store.reducerManager.add(name, reducer));
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name, reducer]: ReducersListEntry) => store.reducerManager.remove(name));
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
