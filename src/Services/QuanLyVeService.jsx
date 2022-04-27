import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyVeService = {
  layDanhSachVe(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VE;
    return AxiosClient.get(url, { headers: { isLoading }, timeout: 30000 });
  },

  layVeTheoID(idVe, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
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

  capNhatThongTinVe(idVe, ve, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
    return AxiosClient.put(url, ve, { headers: { isLoading } });
  },

  xoaVe(idVe, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VE}/${idVe}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },
};
