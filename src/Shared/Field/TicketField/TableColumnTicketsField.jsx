import moment from 'moment';

export const tableColumnsTicketField = [
  {
    title: 'Mã Vé',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã Vé',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Mã Vé',
      };
    },
  },
  {
    title: 'Người đặt',
    dataIndex: ['userId', 'name'],
    key: 'name',
    sorter: (a, b) => {
      if (a.userId && b.userId) {
        const tenA = a.userId.name.toLowerCase();
        const tenB = b.userId.name.toLowerCase();
        if (tenA > tenB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Người đặt',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Người đặt',
      };
    },
  },
  {
    title: 'Tổng số vé',
    dataIndex: ['userId', 'tickets'],
    key: 'tickets',
    render: (text, record, index) => {
      if (!record.userId?.tickets || !record.userId.tickets.length) {
        return 0;
      }
      return record.userId.tickets.length;
    },
    sorter: (a, b) => {
      console.log({ a });
      if (a.userId && b.userId) {
        return a.userId.tickets.length - b.userId.tickets.length;
      }
    },

    onCell: (record) => {
      return {
        'data-label': 'Content',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Content',
      };
    },
  },
  {
    title: 'Tên phòng',
    dataIndex: ['roomId', 'name'],
    key: 'room',
    sorter: (a, b) => {
      console.log({ a });
      if (a.roomId && b.roomId) {
        const nameA = a.roomId.name.toLowerCase();
        const nameB = b.roomId.name.toLowerCase();
        if (nameA > nameB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Ngày tạo vé',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày tạo vé',
      };
    },
  },
  {
    title: 'CheckIn',
    dataIndex: 'checkIn',
    key: 'checkIn',
    render: (text, record, index) => moment(record.checkIn).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'CheckIn',
      };
    },
    sorter: (a, b) => {
      if (a.checkIn && b.checkIn) {
        const checkInA = a.checkIn.toLowerCase();
        const checkInB = b.checkIn.toLowerCase();
        if (checkInA > checkInB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
  },
  {
    title: 'CheckOut',
    dataIndex: 'checkOut',
    key: 'checkOut',
    render: (text, record, index) => moment(record.checkOut).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'CheckOut',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'CheckOut',
      };
    },
    sorter: (a, b) => {
      if (a.checkOut && b.checkOut) {
        const checkOutA = a.checkOut.toLowerCase();
        const checkOutB = b.checkOut.toLowerCase();
        if (checkOutA > checkOutB) {
          return 1;
        } else {
          return -1;
        }
      }
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
    onHeaderCell: (record) => {
      return {
        'data-label': 'Thao tác',
      };
    },
  },
];
