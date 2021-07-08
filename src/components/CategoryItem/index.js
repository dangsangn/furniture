import React from "react";
import "./style.scss";

function CategoryItem(props) {
  const { data } = props;
  return (
    <div className="category-item">
      <div className="overlay"></div>
      <div className="category-item__img">
        <img src={data?.image} alt={data?.name} />
      </div>
      <div className="category-item__link">
        <a href="#1">{data?.name}</a>
      </div>
    </div>
  );
}

export default CategoryItem;
