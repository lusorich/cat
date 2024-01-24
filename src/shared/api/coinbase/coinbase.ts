import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type CoinbaseCurrenciesResponse } from './coinbase.types';

const BASE_URL = 'https://api.coinbase.com/v2';

const enum COINBASE_API_PATHS {
  CURRENCIES = '/currencies',
}

export const coinbaseApi = createApi({
  reducerPath: 'coinbaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<CoinbaseCurrenciesResponse, void>({
      query: () => COINBASE_API_PATHS.CURRENCIES,
    }),
  }),
});

export const { useGetCurrenciesQuery } = coinbaseApi;
