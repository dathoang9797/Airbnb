import { store } from '@Redux/store';
import { localService } from '@Services/LocalStorageService';
import { loadingReducerAction } from '@Redux/Reducers/LoadingSlice';

export const handleChooseStartLoading = (headers) => {
  if (!headers) return;

  if (headers.isLoading) {
    const userInfo = localService.getUserInfo();
    const isLoading = headers.isLoading;
    const { setRequestSpinnerStarted } = loadingReducerAction;
    isLoading && store.dispatch(setRequestSpinnerStarted());
    if (userInfo) headers.token = `${userInfo.token}`;
    return;
  }

  if (headers.isLoadingPopup) {
    const userInfo = localService.getUserInfo();
    const isLoadingPopup = headers.isLoadingPopup;
    const { setRequestSpinnerStartedPopup } = loadingReducerAction;
    isLoadingPopup && store.dispatch(setRequestSpinnerStartedPopup());
    if (userInfo) headers.token = `${userInfo.token}`;
    return;
  }
};

export const handleChooseEndLoading = (headers) => {
  if (!headers) return;

  if (headers.isLoading) {
    const userInfo = localService.getUserInfo();
    const isLoading = headers.isLoading;
    const { setRequestSpinnerEnded } = loadingReducerAction;
    isLoading && store.dispatch(setRequestSpinnerEnded());
    if (userInfo) headers.token = `${userInfo.token}`;
    return;
  }

  if (headers.isLoadingPopup) {
    const userInfo = localService.getUserInfo();
    const isLoadingPopup = headers.isLoadingPopup;
    const { setRequestSpinnerEndedPopup } = loadingReducerAction;
    isLoadingPopup && store.dispatch(setRequestSpinnerEndedPopup());
    if (userInfo) headers.token = `${userInfo.token}`;
    return;
  }
};
