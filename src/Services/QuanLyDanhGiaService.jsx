import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyDanhGiaService = {
  layTatCaDanhGia(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA_THEO_PHONG;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layDanhGiaTheoID(idDanhGia, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  taoDanhGia(idDanhGia, contentDanhGia, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA;
    const params = idDanhGia ? { idDanhGia } : {};
    return AxiosClient.post(url, contentDanhGia, { params, headers: { isLoading } });
  },

  xoaDanhGia(idDanhGia, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },

  capNhatDanhGia(idDanhGia, noiDungDanhGiaCapNhat, isLoading = true) {
    console.log({idDanhGia})
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_DANH_GIA}/${idDanhGia}`;
    return AxiosClient.put(url, noiDungDanhGiaCapNhat, { headers: { isLoading } });
  },
};
