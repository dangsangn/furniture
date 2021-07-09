import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ShowStar from "./../ShowStar";

function ProductItem(props) {
  const { data } = props;
  const history = useHistory();
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { t } = useTranslation();

  const goToPageDetail = () => {
    history.push("/products/" + data.id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    //chua lam page cart nen de link tam
    history.push("/products");
  };

  return (
    <div onClick={goToPageDetail} className="product-item">
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
            <span
              onClick={handleAddToCart}
              className=" social-info social-info--sm"
            >
              <i className="fas fa-cart-plus"></i>
              <span className="hover-text">{t("button.addtocart")}</span>
            </span>
            <span
              // to={"products/" + data.id}
              className=" social-info social-info--sm"
            >
              <i className="fas fa-arrows-alt"></i>
              <span onClick={goToPageDetail} className="hover-text">
                {t("button.viewmore")}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
