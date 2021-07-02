import React, { useState } from "react";
import "./style.scss";

function SizeProduct(props) {
  const data = [38, 39, 40, 41];
  const [sizeItem, setSizeItem] = useState({
    name: "",
    isActive: false,
  });
  const handleCheckSize = (value) => {
    setSizeItem({
      name: value,
      isActive: true,
    });
  };

  const showSize = (data) => {
    return data.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => handleCheckSize(item)}
          className={
            sizeItem.isActive && sizeItem.name === item
              ? "active-size products-page__size__item"
              : "products-page__size__item"
          }
        >
          {item}
        </li>
      );
    });
  };

  return <ul className="products-page__size">{showSize(data)}</ul>;
}

export default SizeProduct;
