import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import ShowStar from "./../ShowStar";

function ProductItem(props) {
  const { data } = props;
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { t } = useTranslation();
  return (
    <div className="product-item">
      <div className="product-item__img">
        <img src={data?.link_img[0]} alt={data?.name} />
      </div>
      <div className="product-item__content">
        <h3>{data?.name}</h3>
        <div>
          <ShowStar stars={data.stars} />
          <p className="product-item__content__price">
            <span>
              {formatter.format(
                data.price - (data.price * data.discount) / 100
              )}
            </span>
            <del>{formatter.format(data.price)}</del>
          </p>
          <div className="product-item__action">
            <a className=" social-info social-info--sm" href="#1">
              <i className="fas fa-cart-plus"></i>
              <span className="hover-text">{t("button.addtocart")}</span>
            </a>
            <a className=" social-info social-info--sm" href="#1">
              <i className="fas fa-arrows-alt"></i>
              <span className="hover-text">{t("button.viewmore")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
