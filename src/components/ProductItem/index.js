import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import history from "../../untils/history";
import ShowStar from "./../ShowStar";
import { useDispatch } from "react-redux";
// import { addCartItem } from "../../actions/user";
import { message } from "antd";
// import { getIdProduct } from "../../actions/product";

function ProductItem(props) {
  const { data } = props;
  const dispatch = useDispatch();
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { t } = useTranslation();

  const goToPageDetail = () => {
    // dispatch(getIdProduct(data?.id));
    history.push("/products/" + data?.id);
    let productsSeen = JSON.parse(sessionStorage.getItem("products_seen"));
    if (productsSeen) {
      const index = productsSeen.findIndex((item) => item.id === data?.id);
      index === -1 && productsSeen.push(data);
    } else {
      productsSeen = [];
      productsSeen.push(data);
    }
    sessionStorage.setItem("products_seen", JSON.stringify(productsSeen));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // dispatch(
    //   addCartItem({
    //     id: data?.id,
    //     name: data?.name,
    //     image: data?.link_img[0],
    //     price: data?.price - (data?.price * data?.discount) / 100,
    //     color: data?.color[0],
    //     quantity: 1,
    //     size: data?.size[0],
    //   })
    // );
    message.success("Add product to cart successfully!");
  };

  return (
    <div onClick={goToPageDetail} className="product-item">
      <div className="product-item__img">
        <img src={data?.imageUrl} alt={data?.name} />
      </div>
      <div className="product-item__content">
        <h3>{data?.name}</h3>
        <div>
          <p className="product-item__content__price">
            <span>{formatter.format(data?.price)}</span>
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
  )
}

export default ProductItem;
