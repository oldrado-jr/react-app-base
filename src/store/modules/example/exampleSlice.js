import { createSlice } from '@reduxjs/toolkit';

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

export const { botaoClicado } = buttonSlice.actions;
export default buttonSlice.reducer;
