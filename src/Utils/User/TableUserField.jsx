import { Tag, Avatar } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

export const getTableUserField = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record, index) => {
        if (!record.avatar) {
          return <Avatar icon={<UserOutlined />} />;
        }
        return <Avatar src={record.avatar} alt={record.avatar} />;
      },
    },
    // {
    //   title: 'Số Điện Thoại',
    //   dataIndex: 'phone',
    //   key: 'phone',
    // },
    // {
    //   title: 'Ngày sinh',
    //   dataIndex: 'birthday',
    //   key: 'birthday',
    //   render: (text, record) => moment(record.birthday).format('DD/MM/YYYY'),
    // },
    // {
    //   title: 'Địa chỉ',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    // {
    //   title: 'Giới tính',
    //   dataIndex: 'gender',
    //   key: 'gender',
    //   render: (text, record) => {
    //     if (record.gender) {
    //       return <Tag color={'cyan'}>Nam</Tag>;
    //     }
    //     return <Tag color={'geekblue'}>Nữ</Tag>;
    //   },
    // },
    {
      title: 'Loại Tài Khoản',
      dataIndex: 'type',
      key: 'type',
      render: (text, record) => {
        if (record.type === process.env.REACT_APP_NGUOI_DUNG_ADMIN) {
          return (
            <Tag color={'green'} className='m-0 sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
              Quản Trị
            </Tag>
          );
        }
        return (
          <Tag color={'blue'} className='m-0 sm:text-xs md:text-xs lg:text-sm xl:text-sm'>
            Khách Hàng
          </Tag>
        );
      },
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  return columns;
};
