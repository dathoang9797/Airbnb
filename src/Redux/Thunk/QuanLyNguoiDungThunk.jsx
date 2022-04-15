import History from "@Utils/Libs/History";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { localService } from "@Services/LocalStorageService";
import { xacThucNguoiDungService } from "@Services/XacThucNguoiDungService";
import { showSuccess } from "@Utils/Alert/PopUp";

const setUserInfoAsync = createAsyncThunk(
  "quanLyNguoiDungReducer/setUserInfoAsync",
  async (ThongTinDangNhap, { rejectWithValue }) => {
    console.log("ThongTinDangNhapVM", ThongTinDangNhap);
    const result = await xacThucNguoiDungService.dangNhap(ThongTinDangNhap);
    console.log(result);
    if (!result) {
      return rejectWithValue("Không thể đăng nhập");
    }

    if (!("user" in result)) {
      return rejectWithValue(result.message);
    }
    showSuccess(result.message);
    result.user.token = result.token;
    localService.setUserInfo(result.user);
    // History.goBack();
    return result.user;
  }
);

const setRegisterUserInfoAsync = createAsyncThunk(
  "quanLyNguoiDungReducer/setRegisterUserInfoAsync",
  async (ThongTinDangKy, { rejectWithValue }) => {
    const result = await xacThucNguoiDungService.dangKy(ThongTinDangKy);

    if (!result) {
      return rejectWithValue("Không thể đăng ký");
    }

    if ("errors" in result) {
      return rejectWithValue(result.message);
    }

    showSuccess("Đăng ký thành công");
    // History.goBack();
  }
);

export const quanLyNguoiDungThunk = {
  setUserInfoAsync,
  setRegisterUserInfoAsync,
};
