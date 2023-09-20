import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    clickedButton: false,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    clickedButton(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.clickedButton = !state.clickedButton;
    },
  },
});

export const { clickedButton } = exampleSlice.actions;
export default exampleSlice.reducer;
