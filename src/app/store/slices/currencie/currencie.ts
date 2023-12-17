import { createSlice } from '@reduxjs/toolkit';
import { type Currencie } from 'shared/api/coinbase/coinbase.types';

export interface CurrencieState {
  activeCurrencie: null | Currencie;
}
const initialState: CurrencieState = {
  activeCurrencie: null,
};

export const currencieSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setActiveCurrencie: (
      state,
      { payload: currencie }: { payload: Currencie },
    ) => {
      state.activeCurrencie = currencie;
    },
  },
});

export const { setActiveCurrencie } = currencieSlice.actions;
