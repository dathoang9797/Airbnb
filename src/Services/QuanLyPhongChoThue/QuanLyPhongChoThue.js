import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyPhongChoThueService = {
    layTatCaPhongChoThue(isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
        return AxiosClient.get(url, { headers: { isLoading } });
    },

    layPhongChoThueTheoID(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
        return AxiosClient.get(url, { params: { id }, headers: { isLoading } });
    },

    taoPhongChoThue(phongChoThue, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
        return AxiosClient.post(url, phongChoThue, { headers: { isLoading } });
    },

    datPhongChoThue(datPhongChoThue, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_DAT_PHONG;
        return AxiosClient.post(url, datPhongChoThue, { headers: { isLoading } });
    },

    capNhatHinhAnhPhongChoThue(id, formData, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH;
        return AxiosClient.put(url, formData, { params: { id }, headers: { isLoading } });
    },

    capNhatThongTinPhongChoThue(id, phongChoThue, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
        return AxiosClient.put(url, phongChoThue, { params: { id }, headers: { isLoading } });
    },

    xoaPhongChoThue(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE;
        return AxiosClient.delete(url, { params: { id }, headers: { isLoading } });
    }

}
