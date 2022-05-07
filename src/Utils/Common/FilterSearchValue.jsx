export const filterSearchValue = (searchValue, data) => {
  return data.filter((item, index) => {
    switch (true) {
      case item.hasOwnProperty('name') &&
        item.hasOwnProperty('description') &&
        item.hasOwnProperty('locationId'): {
        return (
          item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) ||
          item.description.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) ||
          (item?.locationId &&
            item.locationId.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())) ||
          (item?.locationId &&
            item.locationId.province
              .toLowerCase()
              .trim()
              .includes(searchValue.toLowerCase().trim()))
        );
      }

      case item.hasOwnProperty('name') && item.hasOwnProperty('province'): {
        return (
          item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) ||
          item.province.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
        );
      }

      case item.hasOwnProperty('content'): {
        return item.content.toLowerCase().trim().includes(searchValue.toLowerCase().trim());
      }

      case item.hasOwnProperty('name'): {
        return item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim());
      }

      default: {
        return null;
      }
    }
  });
};
