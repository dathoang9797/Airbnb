const selectDanhSachPhongChoThue = (state) => state.QuanLyPhongChoThueReducer.danhSachPhongChoThue;

const selectDanhSachPhongChoThueTheoViTri = (state) =>
  state.QuanLyPhongChoThueReducer.danhSachPhongChoThueTheoViTri;

const selectChiTietPhongChoThue = (state) => state.QuanLyPhongChoThueReducer.chiTietPhongChoThue;

export const quanLyPhongChoThueSelector = {
  selectDanhSachPhongChoThue,
  selectDanhSachPhongChoThueTheoViTri,
  selectChiTietPhongChoThue,
};
