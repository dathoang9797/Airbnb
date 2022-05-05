declare namespace NodeJS {
  interface ProcessEnv {
    //Global
    REACT_APP_BASE_URL_AIRBNB: string;
    REACT_APP_LOCALSTORAGE_USER_INFO: string;
    REACT_APP_LOCALSTORAGE_CITYNAME_INFO: string;
    REACT_APP_TOKEN_CYBERSOFT: string;
    REACT_APP_API_KEY_GOOGLE: string;
    REACT_APP_URL_GEOCODE_GOOGLE: string;

    //Router Service
    REACT_APP_LINK_QUAN_LY_NGUOI_DUNG: string;
    REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_PHAN_TRANG: string;
    REACT_APP_LINK_QUAN_LY_NGUOI_DUNG_UPLOAD_AVATAR: stringr;

    REACT_APP_LINK_QUAN_LY_VI_TRI: string;
    REACT_APP_LINK_QUAN_LY_VI_TRI_DANH_GIA: string;

    REACT_APP_LINK_QUAN_LY_VI_TRI_CAP_NHAT_ANH: string;

    REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE: string;
    REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_DAT_PHONG: string;
    REACT_APP_LINK_QUAN_LY_PHONG_CHO_THUE_CAP_NHAT_ANH: string;

    REACT_APP_LINK_QUAN_LY_DANH_GIA: string;
    REACT_APP_LINK_QUAN_LY_DANH_GIA_THEO_PHONG: string;

    REACT_APP_LINK_QUAN_LY_VE: string;
    REACT_APP_LINK_QUAN_LY_VE_THEO_PHONG: string;
    REACT_APP_LINK_QUAN_LY_VE_THEO_NGUOI_DUNG: string;

    REACT_APP_LINK_XAC_THUC_NGUOI_DUNG_DANG_NHAP: string;
    REACT_APP_LINK_XAC_THUC_NGUOI_DUNG_DANG_KY: string;

    //Loai Nguoi Dung
    REACT_APP_NGUOI_DUNG_CLIENT: string;
    REACT_APP_NGUOI_DUNG_ADMIN: string;

    //Router
    REACT_APP_LINK_HOME: string;
    REACT_APP_LINK_SIGN_IN: string;
    REACT_APP_LINK_SIGN_UP: string;
    REACT_APP_LINK_DETAIL: string;
    REACT_APP_LINK_ROOM: string;
    REACT_APP_LINK_PROFILE: string;
    REACT_APP_LINK_ADMIN: string;

    REACT_APP_LINK_ADMIN_DASH_BOARD: string;

    REACT_APP_LINK_ADMIN_ROOM_MANAGER: string;
    REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT: string;
    REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE: string;

    REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER: string;
    REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_EDIT: string;
    REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_PROFILE: string;

    REACT_APP_LINK_ADMIN_USER_MANAGER: string;
    REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT: string;
    REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE: string;

    REACT_APP_LINK_NOT_FOUND: string;

    REACT_APP_LINK_ADMIN_EVALUATE_MANAGER: string;

    REACT_APP_LINK_ADMIN_TICKETS_MANAGER: string;

    //KeyName Upload FormData
    REACT_APP_KEY_NAME_FORM_DATA_ROOM: string;
    REACT_APP_KEY_NAME_FORM_DATA_USER: string;
    REACT_APP_KEY_NAME_FORM_DATA_LOCATION: string;
  }
}
