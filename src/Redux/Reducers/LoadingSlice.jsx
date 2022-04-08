import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  count: 0,
};

const loadingSlice = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setRequestSpinnerStarted: (state) => {
      state.count++;
      state.isLoading = true;
    },
    setRequestSpinnerEnded: (state) => {
      state.count--;
      if (state.count <= 0) {
        state.isLoading = false;
      }
    },
  },
});

const { setRequestSpinnerEnded, setRequestSpinnerStarted } = loadingSlice.actions;

export const loadingReducerAction = {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
};
export default loadingSlice.reducer;
