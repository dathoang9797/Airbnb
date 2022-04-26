import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyViTriService = {
  layTatCaViTri(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layViTriTheoTenThanhPho(location, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.get(url, { params: { location }, headers: { isLoading } });
  },

  layViTriTheoID(idViTri, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layViTriTheoDanhGia(valueate, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_DANH_GIA;
    return AxiosClient.get(url, { params: { valueate }, headers: { isLoading } });
  },

  taoViTri(viTri, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
    return AxiosClient.post(url, viTri, { headers: { isLoading } });
  },

  capNhatAnhChoViTri(idViTri, formData, isLoading = true) {
    const url = `${ process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_CAP_NHAT_ANH}/${idViTri}`
    return AxiosClient.post(url, formData, { headers: { isLoading } });
  },

  capNhatThongTinViTri(idViTri, viTri, isLoading = true) {
     const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.put(url, viTri, { headers: { isLoading } });
  },

  xoaViTri(idViTri, isLoading = true) {
     const url = `${process.env.REACT_APP_LINK_QUAN_LY_VI_TRI}/${idViTri}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },
};
