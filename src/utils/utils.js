export const filteredByName = (array, query) => {
  return array.filter(el => {
    return el.name.toLowerCase().includes(query.toLowerCase());
  });
};
