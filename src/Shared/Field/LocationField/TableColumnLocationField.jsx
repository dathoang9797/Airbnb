import UpLoadImageTable from '@Components/UpLoadImageTable';

export const tableColumnsLocationField = [
    {
      title: 'Mã Vị Trí',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => index + 1,
      onCell: (record) => {
        return {
          'data-label': 'Mã Vị Trí',
        };
      },
    },
    {
      title: 'Tên Vị Trí',
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
        return <UpLoadImageTable key={record._id} idRoom={record._id} imageProp={record.image} />;
      },
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: (a, b) => {
        if (a.country && b.country) {
          const countryA = a.country.toLowerCase();
          const countryB = b.country.toLowerCase();
          if (countryA > countryB) {
            return 1;
          } else {
            return -1;
          }
        }
      },
      onCell: (record) => {
        return {
          'data-label': 'Country',
        };
      },
    },
    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
      onCell: (record) => {
        return {
          'data-label': 'Province',
        };
      },
      sorter: (a, b) => {
        if (a.province && b.province) {
          const provinceA = a.province.toLowerCase();
          const provinceB = b.province.toLowerCase();
          if (provinceA > provinceB) {
            return 1;
          } else {
            return -1;
          }
        }
      },
    },
    {
      title: 'Valueate',
      dataIndex: 'valueate',
      key: 'valueate',
      onCell: (record) => {
        return {
          'data-label': 'Valueate',
        };
      },
      sorter: (a, b) => a.valueate - b.valueate,
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