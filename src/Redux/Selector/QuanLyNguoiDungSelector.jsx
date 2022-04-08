const selectUserInfo = (state) => state.QuanLyNguoiDungReducer.userInfo;

const selectDanhSachNguoiDung = (state) => state.QuanLyNguoiDungReducer.danhSachNguoiDung;

const selectChiTietNguoiDung = (state) => state.QuanLyNguoiDungReducer.chiTietNguoiDung;

export const selectQuanLyNguoiDung = {
  selectUserInfo,
  selectDanhSachNguoiDung,
  selectChiTietNguoiDung,
};
