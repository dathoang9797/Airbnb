import { ButtonCSS } from '@/Components/Button';

export const handleDataTable = (
  data,
  { handleGetProfileItem, handleGetDetailItem, handleDeleteItem }
) => {
  return data.map((item, index) => {
    return {
      ...item,
      action: (
        <div>
          <ButtonCSS.ShowProfile
            onClick={() => {
              handleGetProfileItem(item._id);
            }}
          >
            Xem thông tin chi tiết
          </ButtonCSS.ShowProfile>
          <ButtonCSS.Edit
            onClick={() => {
              handleGetDetailItem(item._id);
            }}
          >
            Sửa
          </ButtonCSS.Edit>
          <ButtonCSS.Delete
            onClick={() => {
              handleDeleteItem(item._id);
            }}
          >
            Xóa
          </ButtonCSS.Delete>
        </div>
      ),
    };
  });
};
