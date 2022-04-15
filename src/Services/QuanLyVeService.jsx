import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyVeService = {
  layDanhSachVe(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layVeTheoID(id, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE + `/${id}`;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layDanhSachVeTheoNguoiDung(userId, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE_THEO_NGUOI_DUNG;
    return AxiosClient.get(url, { params: { userId }, headers: { isLoading } });
  },

  layDanhSachVeTheoPhong(roomId, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE_THEO_PHONG;
    return AxiosClient.get(url, { params: { roomId }, headers: { isLoading } });
  },

  taoVe(ve, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE;
    return AxiosClient.post(url, ve, { headers: { isLoading } });
  },

  capNhatThongTinVe(id, ve, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE + `/${id}`;
    return AxiosClient.put(url, ve, { headers: { isLoading } });
  },

  xoaVe(id, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE + `/${id}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },
};
