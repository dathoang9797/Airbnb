import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyNguoiDungService = {
    layTatCaNguoiDung(isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
        return AxiosClient.get(url, { headers: { isLoading } });
    },

    layNguoiDungTheoID(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
        return AxiosClient.get(url, { params: { id }, headers: { isLoading } });
    },

    layNguoiDungPhanTrang(skip = 0, limit = 10, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_PHAN_TRANG;
        return AxiosClient.get(url, { params: { skip, limit }, headers: { isLoading } });
    },

    xoaNguoiDung(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
        return AxiosClient.delete(url, { params: { id }, headers: { isLoading } });
    },
    capNhatNguoiDung(id, nguoiDungCapNhat, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
        return AxiosClient.put(url, nguoiDungCapNhat, { params: { id }, headers: { isLoading } });
    },

    taoNguoiDung(nguoiDung, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG;
        return AxiosClient.post(url, nguoiDung, { headers: { isLoading } });
    },

    capNhatAnhDaiDienNguoiDung(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_UPLOAD_AVATAR;
        return AxiosClient.post(url, { params: { id }, headers: { isLoading } });
    }
};
