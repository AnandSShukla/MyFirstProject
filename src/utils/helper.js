//keep all your common utility functions here
// Filter the restaurant data according input type
export const filterList = (text, objArray) => {
  const filterData = objArray.filter((objArray) =>
    objArray?.name?.toLowerCase().includes(text.toLowerCase())
  );

  return filterData;
};