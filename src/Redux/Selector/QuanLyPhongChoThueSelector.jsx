const selectDanhSachPhongChoThue = (state) => state.QuanLyPhongChoThueReducer.danhSachPhongChoThue;

const selectDanhSachPhongChoThueTheoViTri = (state) =>
  state.QuanLyPhongChoThueReducer.danhSachPhongChoThueTheoViTri;

export const quanLyPhongChoThueSelector = {
  selectDanhSachPhongChoThue,
  selectDanhSachPhongChoThueTheoViTri,
};
