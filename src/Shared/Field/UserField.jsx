import { Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const addUserField = {
  address: '',
  birthday: '',
  password: '',
  email: '',
  name: '',
  phone: '',
  type: '',
  gender: false,
};

const editUserField = {
  _id: '',
  address: '',
  birthday: '',
  email: '',
  name: '',
  phone: '',
  type: '',
  gender: false,
};

const signUpField = {
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: '',
  gender: false,
};

const tableColumnsUserField = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'STT',
      };
    },
  },
  {
    title: 'Họ Tên',
    dataIndex: 'name',
    key: 'name',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => {
      if (a.name && b.name) {
        const tenA = a.name.toLowerCase();
        const tenB = b.name.toLowerCase();
        if (tenA > tenB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Họ Tên',
      };
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => {
      if (a.email && b.email) {
        const emailA = a.email.toLowerCase();
        const emailB = b.email.toLowerCase();
        if (emailA > emailB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Email',
      };
    },
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
    onCell: (record) => {
      return {
        'data-label': 'Hình Ảnh',
      };
    },
    filters: [
      {
        text: 'Có hình',
        value: 'Có hình',
      },
      {
        text: 'Chưa có hình',
        value: 'Chưa có hình',
      },
    ],
    onFilter: (value, record) => {
      if (value === 'Có hình') {
        return record.avatar;
      }
      return !record.avatar;
    },
  },
  {
    title: 'Loại Tài Khoản',
    dataIndex: 'type',
    key: 'type',
    render: (text, record) => {
      if (record.type === process.env.REACT_APP_NGUOI_DUNG_ADMIN) {
        return (
          <Tag color={'green'} className='m-0 sm:text-xs md:text-xs lg:text-xs xl:text-sm'>
            Quản Trị
          </Tag>
        );
      }
      return (
        <Tag color={'blue'} className='m-0 sm:text-xs md:text-xs lg:text-xs xl:text-sm'>
          Khách Hàng
        </Tag>
      );
    },
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => {
      if (a.type && b.type) {
        const typeA = a.type.toLowerCase();
        const typeB = b.type.toLowerCase();
        if (typeA > typeB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Loại Tài Khoản',
      };
    },
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    onCell: (record) => {
      return {
        'data-label': 'Thao tác',
      };
    },
  },
];

export const userField = {
  addUserField,
  signUpField,
  editUserField,
  tableColumnsUserField,
};
