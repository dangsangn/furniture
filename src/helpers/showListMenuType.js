import countProduct from "./countProduct";
const showList = (list, typeName) => {
  let subMenu = new Set();
  list.forEach((item) => {
    subMenu.add(item[typeName]);
  });

  let newSubMenu = [];
  subMenu.forEach((item) => {
    newSubMenu.push({
      type: item,
      countProduct: countProduct(list, typeName, item),
    });
  });
  return newSubMenu;
};

export default showList;
