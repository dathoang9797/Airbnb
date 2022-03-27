import { loadingReducerAction } from '@Redux/Reducers/LoadingSlice';
import { store } from '@Redux/store';
import { localService } from '@Services/LocalStorageService';
import axios, { AxiosError } from 'axios';
import queryString from 'query-string';

const { setRequestSpinnerStarted, setRequestSpinnerEnded } = loadingReducerAction;

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_AIRBNB,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    tokenByClass: process.env.REACT_APP_TOKEN_CYBERSOFT,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const userInfo = localService.getUserInfo();
    if (config.headers) {
      const isLoading = config.headers.isLoading;
      isLoading && store.dispatch(setRequestSpinnerStarted());
      if (userInfo) config.headers.token = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
  }
);

axiosClient.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  async (response) => {
    if (response.config.headers) {
      const isLoading = response.config.headers.isLoading;
      isLoading && store.dispatch(setRequestSpinnerEnded());
    }

    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => {
    const isLoading = error.config.headers?.isLoading;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      isLoading && store.dispatch(setRequestSpinnerEnded());
      return error.response.data;
    }
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    if (error.request) {
      isLoading && store.dispatch(setRequestSpinnerEnded());
      console.log('🚀 ~ file: AxiosClient.ts ~ line 34 ~ error.request', error.request);
      return;
    }
    // // Something happened in setting up the request that triggered an Error
    if (error.message) {
      isLoading && store.dispatch(setRequestSpinnerEnded());
      console.log('🚀 ~ file: AxiosClient.ts ~ line 39 ~ error.message', error.message);
      return;
    }
  }
);

export default axiosClient;
