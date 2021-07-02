import React, { useState } from "react";
import "./style.scss";

function ColorProduct(props) {
  const data = ["red", "black", "white", "silver"];
  const [colorItem, setColorItem] = useState({
    name: "",
    isActive: false,
  });
  const handleCheckColor = (value) => {
    setColorItem({
      name: value,
      isActive: true,
    });
  };

  const showColor = (data) => {
    return data.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => handleCheckColor(item)}
          className={
            colorItem.isActive && colorItem.name === item
              ? `active active--${item} products-page__color__item products-page__color__item--${item}`
              : `products-page__color__item products-page__color__item--${item}`
          }
        ></li>
      );
    });
  };

  return <ul className="products-page__color">{showColor(data)}</ul>;
}

export default ColorProduct;
