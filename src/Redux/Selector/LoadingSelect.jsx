//Write like this will rerender multile time can console.log to check in HomePage.tsx
//export const selectIsLoadingState = (state: RootState) => state.LoadingReducer;

export const selectIsLoadingState = (state) => state.LoadingReducer.isLoading;

export const selectCountState = (state) => state.LoadingReducer.count;
