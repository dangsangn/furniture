import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";

function ProductItem(props) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { t } = useTranslation();
  return (
    <div className="product-item">
      <div className="product-item__img">
        <img
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          alt=""
        />
      </div>
      <div className="product-item__content">
        <h3>Nike Victori One</h3>
        <div className="product-item__content__stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="far fa-star"></i>
        </div>
        <p className="product-item__content__price">
          <span>{formatter.format(150000)}</span>
          <del>{formatter.format(300000)}</del>
        </p>
        <div className="product-item__action">
          <a className=" social-info social-info--sm" href="#1">
            <i class="fas fa-cart-plus"></i>
            <span className="hover-text">{t("button.addtocart")}</span>
          </a>
          <a className=" social-info social-info--sm" href="#1">
            <i class="fas fa-arrows-alt"></i>
            <span className="hover-text">{t("button.viewmore")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
