import { Button, InputNumber, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../actions/product";
import { addCartItem } from "../../actions/user";
import ImgSizeShoe from "../../assets/images/size-shoe.jpg";
import ProductSeen from "../../components/ProductSeen";
import history from "../../untils/history";
import ImageProduct from "./ImageProduct";
import PostReview from "./PostReview";
import ShowReview from "./ShowReview";
import "./style.scss";

function DetailProduct(props) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const [, setColor] = useState("");
  const [, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const idProduct = history.location.pathname.slice(10);

  useEffect(() => {
    dispatch(getProductDetail(idProduct));
  }, [dispatch, idProduct]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onChangeQuantity = (value) => {
    setQuantity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (!Object.fromEntries(data).color) {
      message.warning("Vui lòng chọn màu sắc!");
    } else if (!Object.fromEntries(data).size) {
      message.warning("Vui lòng chọn kích cỡ!");
    } else if (
      !Object.fromEntries(data).color &&
      !Object.fromEntries(data).size
    ) {
      message.warning("Vui lòng chọn kích thước và màu sắc!");
    } else {
      const sendData = {
        id: productDetail.id,
        name: productDetail.name,
        image: productDetail.link_img[0],
        price:
          productDetail.price -
          (productDetail.price * productDetail.discount) / 100,
        ...Object.fromEntries(data),
        quantity: +Object.fromEntries(data).quantity,
        size: +Object.fromEntries(data).size,
      };
      dispatch(addCartItem(sendData));
      message.success("Add product successfully!");
    }
  };

  return (
    <>
      <div className="detail-product mt-50">
        <Container>
          <Row>
            <Col xl={7} sm={12}>
              <ImageProduct images={productDetail.link_img} />
            </Col>
            <Col xl={5} sm={12}>
              <div className="detail-product__info">
                <h2 className="detail-product__info__header">
                  {productDetail.name}
                </h2>
                <p className="detail-product__info__desc">
                  {productDetail.description}
                </p>
                <div className="detail-product__info__price">
                  <del>{formatter.format(productDetail.price)}</del>
                  <span>
                    {formatter.format(
                      productDetail.price -
                        (productDetail.price * productDetail.discount) / 100
                    )}
                  </span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h3>{t("detailProduct.color")}</h3>
                    {productDetail.color.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <input
                            id={`color-radio--${item}`}
                            type="radio"
                            name="color"
                            value={item}
                            onChange={(e) => setColor(e.target.value)}
                          ></input>
                          <label
                            style={{ backgroundColor: item }}
                            htmlFor={`color-radio--${item}`}
                            className={`color-radio color-radio--${item}`}
                          ></label>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className="form-group">
                    <h3>{t("productDetail.size")}</h3>
                    {productDetail.size.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          <input
                            id={`size-radio--${item}`}
                            type="radio"
                            name="size"
                            value={item}
                            onChange={(e) => setSize(e.target.value)}
                          ></input>
                          <label
                            htmlFor={`size-radio--${item}`}
                            className="size-radio"
                          >
                            {item}
                          </label>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className="form-group">
                    <h3>{t("productDetail.quantity")} </h3>
                    <div className="detail-product__container-guide-shoe">
                      <InputNumber
                        min={1}
                        max={10}
                        name="quantity"
                        value={quantity}
                        onChange={onChangeQuantity}
                      />
                      <Button onClick={showModal} className="btn--guide-shoe">
                        {t("button.guide")}
                        <i className="fas fa-external-link-alt"></i>
                      </Button>
                      <Modal
                        title="Hướng dẫn chọn size giày"
                        width={800}
                        style={{ top: 20 }}
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <img src={ImgSizeShoe} alt="img shoe" />
                      </Modal>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn--primary btn--detail-product"
                    >
                      {t("button.addtocart")}
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <div className="detail-product__review mt-50">
            <Row>
              <Col xl={6} sm={12}>
                <div className="detail-product__review__show">
                  <h2>{t("productDetail.review")}</h2>
                  <ShowReview idProduct={productDetail.id} />
                </div>
              </Col>
              <Col xl={6} sm={12}>
                <PostReview idProduct={productDetail.id} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xl={12} sm={12}>
            <ProductSeen />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailProduct;
