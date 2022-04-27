import { ButtonCSS } from '@/Components/Button';

export const handleDataTable = (
  data,
  { handleGetProfileItem, handleGetDetailItem, handleDeleteItem, handleUpdateItem }
) => {
  const { ShowProfile, Edit, Delete } = ButtonCSS;
  return data.map((item, index) => {
    return {
      ...item,
      action: (
        <div>
          {handleGetProfileItem ? (
            <ShowProfile
              onClick={() => {
                handleGetProfileItem(item._id);
              }}
            >
              Xem thông tin chi tiết
            </ShowProfile>
          ) : null}

          {handleGetDetailItem ? (
            <Edit
              onClick={() => {
                handleGetDetailItem(item._id);
              }}
            >
              Sửa
            </Edit>
          ) : handleUpdateItem ? (
            <Edit
              onClick={() => {
                handleUpdateItem(item._id);
              }}
            >
              Sửa
            </Edit>
          ) : null}
          {handleDeleteItem ? (
            <Delete
              onClick={() => {
                handleDeleteItem(item._id);
              }}
            >
              Xóa
            </Delete>
          ) : null}
        </div>
      ),
    };
  });
};
