import { configureStore } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { coinbaseApi } from 'shared/api/coinbase/coinbase';

import { currencieSlice } from './slices/currencie/currencie';

export const store = configureStore({
  reducer: {
    [coinbaseApi.reducerPath]: coinbaseApi.reducer,
    [currencieSlice.reducerPath]: currencieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinbaseApi.middleware),
});

export type IAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export const dispatch = store.dispatch;
