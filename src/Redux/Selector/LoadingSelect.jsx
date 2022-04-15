import { RootState } from '@Redux/store';

//Write like this will rerender multile time can console.log to check in HomePage.tsx
//export const selectIsLoadingState = (state: RootState) => state.LoadingReducer;

export const selectIsLoadingState = (state: RootState) => state.LoadingReducer.isLoading;

export const selectCountState = (state: RootState) => state.LoadingReducer.count;
