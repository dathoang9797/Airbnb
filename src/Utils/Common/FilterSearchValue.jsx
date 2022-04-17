export const filterSearchValue = (searchValue, data) => {
  return data.filter((item, index) => {
    if (!item.name) return null;
    return item.name.toLowerCase().indexOf(searchValue) > -1;
  });
};
