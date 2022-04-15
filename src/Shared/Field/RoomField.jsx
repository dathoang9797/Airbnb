import UpLoadImage from '@Components/UpLoadImage';

const addRoomField = {
  name: '',
  description: '',
  guests: 0,
  bedRoom: 0,
  bath: 0,
  price: 0,
  elevator: false,
  hotTub: false,
  pool: false,
  indoorFireplace: false,
  dryer: false,
  gym: false,
  kitchen: false,
  wifi: false,
  heating: false,
  cableTV: false,
};

const editRoomField = {
  ...addRoomField,
  _id: '',
};

const tableColumnsRoomField = [
  {
    title: 'Mã Phòng',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã phòng',
      };
    },
  },
  {
    title: 'Tên Phòng',
    dataIndex: 'name',
    key: 'name',
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
        'data-label': 'Tên phòng',
      };
    },
  },
  {
    title: 'Hình Ảnh',
    dataIndex: 'image',
    key: 'image',

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
        return record.image;
      }
      return !record.image;
    },
    render: (text, record, index) => {
      return <UpLoadImage key={record._id} idRoom={record._id} imageProp={record.image} />;
    },
  },
  {
    title: 'Location',
    dataIndex: 'locationId',
    key: 'locationId',
    sorter: (a, b) => {
      if (a.locationId && b.locationId) {
        const emailA = a.locationId.name.toLowerCase();
        const emailB = b.locationId.name.toLowerCase();
        if (emailA > emailB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    render: (text, record, index) => {
      if (record.locationId) {
        return record.locationId.name;
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Location',
      };
    },
  },
  {
    title: 'GuestMax',
    dataIndex: 'guests',
    key: 'guests',
    onCell: (record) => {
      return {
        'data-label': 'GuestMax',
      };
    },
    sorter: (a, b) => a.guests - b.guests,
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

export const roomField = {
  addRoomField,
  tableColumnsRoomField,
  editRoomField,
};
