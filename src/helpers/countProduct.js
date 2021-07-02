const countProduct = (list, type, name) => {
  let result = 0;
  let i = 0;

  for (i; i < list.length; i++) {
    if (list[i][type] === name) {
      result++;
    }
  }
  return result;
};

export default countProduct;
