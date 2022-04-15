import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyDanhGiaService = {
  layTatCaDanhGia(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layDanhGiaTheoID(id, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA + `/${id}`;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  taoDanhGia(roomId, danhGia, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA_TAO_DANH_GIA;
    return AxiosClient.post(url, danhGia, { params: { roomId }, headers: { isLoading } });
  },

  xoaDanhGia(id, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA + `/${id}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },

  capNhatDanhGia(id, DanhGiaCapNhat, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA + `/${id}`;
    return AxiosClient.put(url, DanhGiaCapNhat, { headers: { isLoading } });
  },
};
