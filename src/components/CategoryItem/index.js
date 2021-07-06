import React from "react";
import "./style.scss";

function CategoryItem(props) {
  return (
    <div className="category-item">
      <div className="overlay"></div>
      <div className="category-item__img">
        <img
          src="https://preview.colorlib.com/theme/karma/img/category/xc1.jpg.pagespeed.ic.XqvaEBoKy8.webp"
          alt="img"
        />
      </div>
      <div className="category-item__link">
        <a href="#1">Nike</a>
      </div>
    </div>
  );
}

export default CategoryItem;
