import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhongChoThueService = {
  layTatCaPhongChoThue(isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  layPhongChoThueTheoViTri(locationId, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.get(url, { params: { locationId }, headers: { isLoading } });
  },

  layPhongChoThueTheoID(idRoom, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.get(url, { headers: { isLoading } });
  },

  taoPhongChoThue(phongChoThue, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
    return AxiosClient.post(url, phongChoThue, { headers: { isLoading } });
  },

  datPhongChoThue(datPhongChoThue, isLoading = true) {
    const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_DAT_PHONG;
    return AxiosClient.post(url, datPhongChoThue, { headers: { isLoading } });
  },

  capNhatHinhAnhPhongChoThue(idRoom, formData, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH}/${idRoom}`;
    return AxiosClient.post(url, formData, { headers: { isLoading } });
  },

  capNhatThongTinPhongChoThue(idRoom, phongChoThue, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.put(url, phongChoThue, { headers: { isLoading } });
  },

  xoaPhongChoThue(idRoom, isLoading = true) {
    const url = `${process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE}/${idRoom}`;
    return AxiosClient.delete(url, { headers: { isLoading } });
  },
};
