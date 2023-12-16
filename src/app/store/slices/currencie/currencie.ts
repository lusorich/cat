import { createSlice } from '@reduxjs/toolkit';
import { type Currencie } from 'shared/api/coinbase/coinbase.types';

const initialState: { activeCurrencie: null | Currencie } = {
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
      console.log('curenc', currencie);
      state.activeCurrencie = currencie;
    },
  },
});

export const { setActiveCurrencie } = currencieSlice.actions;
