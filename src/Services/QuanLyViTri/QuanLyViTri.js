import AxiosClient from '@Utils/Http/AxiosClient';

export const quanLyViTriService = {
    layTatCaViTri(isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
        return AxiosClient.get(url, { headers: { isLoading } });
    },

    layViTriTheoID(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
        return AxiosClient.get(url, { params: { id }, headers: { isLoading } });
    },

    layViTriTheoDanhGia(valueate, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_DANH_GIA;
        return AxiosClient.get(url, { params: { valueate }, headers: { isLoading } });
    },


    taoViTri(viTri, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
        return AxiosClient.post(url, viTri, { headers: { isLoading } });
    },

    capNhatAnhChoViTri(id, formData, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI_CAP_NHAT_ANH;
        return AxiosClient.post(url, formData, { params: { id }, headers: { isLoading } });
    },

    capNhatViTri(id, viTri, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
        return AxiosClient.put(url, viTri, { params: { id }, headers: { isLoading } });
    },

    xoaViTri(id, isLoading = true) {
        const url = process.env.REACT_APP_LINK_QUAN_LY_VI_TRI;
        return AxiosClient.delete(url, { params: { id }, headers: { isLoading } });
    }

}
