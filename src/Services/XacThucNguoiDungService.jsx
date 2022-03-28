import AxiosClient from '@Utils/Http/AxiosClient';

export const xacThucNguoiDungService = {
  dangNhap(user, isLoading = true) {
    const url = process.env.REACT_APP_LINK_XAC_THUC_NGUOI_DUNG_DANG_NHAP;
    return AxiosClient.post(url, user, { headers: { isLoading } });
  },

  dangKy(user, isLoading = true) {
    const url = process.env.REACT_APP_LINK_XAC_THUC_NGUOI_DUNG_DANG_KY;
    return AxiosClient.post(url, user, { headers: { isLoading } });
  },
};
