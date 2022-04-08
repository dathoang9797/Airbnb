export const removeSpace = (str, toUpperCase = false) => {
  if (!str) return;
  return str.replace(/\s/g, '');
};
