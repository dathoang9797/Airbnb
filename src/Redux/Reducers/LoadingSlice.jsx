import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoadingPopUp: false,
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
    setRequestSpinnerStartedPopup: (state) => {
      state.count++;
      state.isLoadingPopUp = true;
    },
    setRequestSpinnerEndedPopup: (state) => {
      state.count--;
      if (state.count <= 0) {
        state.isLoadingPopUp = false;
      }
    },
  },
});

const {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
  setRequestSpinnerEndedPopup,
  setRequestSpinnerStartedPopup,
} = loadingSlice.actions;

export const loadingReducerAction = {
  setRequestSpinnerEnded,
  setRequestSpinnerStarted,
  setRequestSpinnerEndedPopup,
  setRequestSpinnerStartedPopup,
};
export default loadingSlice.reducer;
