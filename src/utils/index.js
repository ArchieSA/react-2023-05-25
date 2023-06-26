export const isMatch = (arr, itemId) => {
  return arr.every(id => itemId.includes(id));
};
