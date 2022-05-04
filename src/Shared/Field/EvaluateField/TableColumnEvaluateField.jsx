import moment from 'moment';

export const tableColumnsEvaluateField = [
  {
    title: 'Mã Đánh Giá',
    dataIndex: 'stt',
    key: 'stt',
    render: (text, record, index) => index + 1,
    onCell: (record) => {
      return {
        'data-label': 'Mã Đánh Giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Mã Đánh Giá',
      };
    },
  },
  {
    title: 'Nội Dung',
    dataIndex: 'content',
    key: 'content',
    sorter: (a, b) => {
      if (a.content && b.content) {
        const tenA = a.content.toLowerCase();
        const tenB = b.content.toLowerCase();
        if (tenA > tenB) {
          return 1;
        } else {
          return -1;
        }
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
    title: 'Ngày tạo đánh giá',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text, record, index) => moment(record.created_at).format('DD/MM/YYYY'),
    sorter: (a, b) => {
      if (a.created_at && b.created_at) {
        const created_atA = a.created_at.toLowerCase();
        const created_atB = b.created_at.toLowerCase();
        if (created_atA > created_atB) {
          return 1;
        } else {
          return -1;
        }
      }
    },
    onCell: (record) => {
      return {
        'data-label': 'Ngày tạo đánh giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày tạo đánh giá',
      };
    },
  },
  {
    title: 'Ngày cập nhật đánh giá',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text, record, index) => moment(record.updatedAt).format('DD/MM/YYYY'),
    onCell: (record) => {
      return {
        'data-label': 'Ngày cập nhật đánh giá',
      };
    },
    onHeaderCell: (record) => {
      return {
        'data-label': 'Ngày cập nhật đánh giá',
      };
    },
    sorter: (a, b) => {
      if (a.updatedAt && b.updatedAt) {
        const updatedAtA = a.updatedAt.toLowerCase();
        const updatedAtB = b.updatedAt.toLowerCase();
        if (updatedAtA > updatedAtB) {
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
