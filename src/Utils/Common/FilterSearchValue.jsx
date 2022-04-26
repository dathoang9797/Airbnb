export const filterSearchValue = (searchValue, data) => {
  return data.filter((item, index) => {
    switch (true) {
      case item.hasOwnProperty('name'): {
        return item.name.toLowerCase().indexOf(searchValue) > -1;
      }

      case item.hasOwnProperty('content'): {
        return item.content.toLowerCase().indexOf(searchValue) > -1;
      }

      default: {
        return null;
      }
    }
  });
};
