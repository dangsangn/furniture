import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../actions/category";
import { getProductByCategory } from "../../../actions/control-action";
import "./style.scss";

function CategoryProduct(props) {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryItem, setCategoryItem] = useState({
    name: "",
    isActive: false,
  });

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleCheckCategory = (value) => {
    dispatch(getProductByCategory(value.id));
    setCategoryItem({
      name: value.name,
      isActive: true,
    });
  };

  const showCategory = (data) => {
    return data.map((item) => {
      return (
        <li
          key={item.id}
          onClick={() => handleCheckCategory(item)}
          className={
            categoryItem.isActive && categoryItem.name === item.name
              ? "active products-page__category__item"
              : "products-page__category__item"
          }
        >
          {item.name}
        </li>
      );
    });
  };

  return <ul className="products-page__category">{showCategory(category)}</ul>;
}

export default CategoryProduct;
