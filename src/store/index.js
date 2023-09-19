import { configureStore, createSlice } from '@reduxjs/toolkit';

const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    botaoClicado: false,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    botaoClicado(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.botaoClicado = !state.botaoClicado;
    },
  },
});

const store = configureStore({
  reducer: {
    button: buttonSlice.reducer,
  },
});

export const { botaoClicado } = buttonSlice.actions;

export default store;
