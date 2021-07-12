import {
  InputNumber,
  message,
  Popconfirm,
  Space,
  Table,
  Radio,
  Input,
  Button,
  Form,
} from "antd";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCartItem,
  sendListPayment,
  updateQuantityCart,
} from "../../actions/user";
import ProductSeen from "../../components/ProductSeen";
import history from "../../untils/history";
import { useTranslation } from "react-i18next";
import "./style.scss";

function CartPage(props) {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const dispatch = useDispatch();
  const [payment, setPaymnet] = useState("Payment on delivery");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 4,
  });
  const [listOrder, setListOrder] = useState([]);
  const [totalMoneyListOrder, setTotalMoneyListOrder] = useState(0);
  const columns = [
    {
      title: `${t("cartPage.product")}`,
      dataIndex: "product",
      render: ({ id, img, name, color, size }) => (
        <div className="product-info-cart">
          <div className="product-info-cart__img">
            <img src={img} alt={name} />
          </div>
          <div className="product-info-cart__content">
            <Link
              to={"products/" + id}
              className="product-info-cart__content__link"
            >
              {name}
            </Link>
            <div>
              <span className="product-info-cart__content__color">
                {t("cartPage.color")} {color}
              </span>
              <span>
                {t("cartPage.size")} {size}
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: `${t("cartPage.price")}`,
      dataIndex: "price",
      render: (value) => <p>{formatter.format(value)}</p>,
    },
    {
      title: `${t("cartPage.quantity")}`,
      dataIndex: "quantity",
      render: ({ id, quantity, color, size }) => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={quantity}
          onChange={(value) => {
            updateQuantityCartItem(id, value, color, size);
          }}
        />
      ),
      colSpan: 1,
    },
    {
      title: `${t("cartPage.total")}`,
      dataIndex: "total",
      render: (value) => <p>{formatter.format(value)}</p>,
    },
    {
      title: `${t("cartPage.action")}`,
      key: "action",
      dataIndex: "action",
      render: (id) => (
        <Space size="middle">
          <Popconfirm
            title={t("cartPage.messageDeleteProduct")}
            onConfirm={() => {
              handleDeleteCartItem(id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <i className="fas fa-trash"></i>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data = cart.map((item, index) => ({
    key: index,
    product: {
      id: item.id,
      name: item.name,
      img: item.image,
      size: item.size,
      color: item.color,
    },
    price: item.price,
    quantity: {
      quantity: item.quantity,
      id: item.id,
      color: item.color,
      size: item.size,
    },
    total: item.quantity * item.price,
    action: item.id,
  }));

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      let total = selectedRows.reduce((totalNow, item) => {
        return totalNow + item.total;
      }, 0);
      setTotalMoneyListOrder(total);
      setListOrder([...selectedRows]);
    },
  };

  function updateQuantityCartItem(value, id, color, size) {
    dispatch(updateQuantityCart(value, id, color, size));
  }

  function handleDeleteCartItem(id) {
    dispatch(deleteCartItem(id));
    message.success("Delete product successfully!");
  }

  function onChangePayment(e) {
    setPaymnet(e.target.value);
  }

  function onSubmitPayment(values) {
    if (user.isLogin) {
      if (listOrder.length === 0) {
        message.warning("Please chose a product!");
      } else {
        dispatch(
          sendListPayment({
            idUser: user.id,
            listPayment: listOrder,
            ...values,
          })
        );
        message.success("Order success!");
        history.push("/products");
      }
    } else {
      history.push("/login");
    }
  }

  function handleTableChange(pagination) {
    setPagination(pagination);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }

  return (
    <div className="cart-page mt-50">
      <Container>
        <Row>
          <Col xl={8} sm={12}>
            <div>
              <Table
                rowSelection={{
                  type: "checkbox",
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={pagination}
                onChange={handleTableChange}
              />
            </div>
          </Col>
          <Col xl={4} sm={12}>
            <div className="cart-page__order">
              <h2 className="cart-page__order__title">
                {t("cartPage.titleOrder")}
              </h2>
              <ul className="cart-page__order__list">
                <li className="cart-page__order__list__item">
                  <span>{t("cartPage.product")}</span>
                  <span>{t("cartPage.total")}</span>
                </li>
                <div className="cart-page__order__list__container">
                  {listOrder.map((item, index) => (
                    <li className="cart-page__order__list__item" key={index}>
                      <span>{item?.product.name} </span>
                      <span>x {item?.quantity.quantity}</span>
                      <span>{formatter.format(item?.total)}</span>
                    </li>
                  ))}
                </div>
                <li className="cart-page__order__list__item">
                  <span className="color-dark">{t("cartPage.subTotal")} </span>
                  <span className="color-dark">
                    {formatter.format(totalMoneyListOrder)}
                  </span>
                </li>
                <li className="cart-page__order__list__item">
                  <span className="color-dark">{t("cartPage.shipping")} </span>
                  <span className="color-dark">{formatter.format(0)}</span>
                </li>
                <li className="cart-page__order__list__item">
                  <span className="color-dark">{t("cartPage.total")} </span>
                  <span className="color-dark">
                    {formatter.format(totalMoneyListOrder)}
                  </span>
                </li>
              </ul>
              <Form onFinish={onSubmitPayment}>
                <Form.Item
                  name="payment"
                  label="Payment by"
                  rules={[
                    {
                      required: true,
                      message: `${t("cartPage.paymentRequired")}`,
                    },
                  ]}
                >
                  <Radio.Group onChange={onChangePayment} value={payment}>
                    <Space direction="vertical">
                      <Radio value={"Payment on delivery"}>
                        {t("cartPage.chekbox1")}
                      </Radio>
                      <Radio value={"Payment by card"}>
                        {t("cartPage.chekbox2")}
                        {payment === "Payment by card" ? (
                          <Form.Item
                            name="numberCart"
                            rules={[
                              {
                                required: true,
                                message: `${t(
                                  "cartPage.paymentRequiredInput"
                                )}`,
                              },
                            ]}
                          >
                            <Input placeholder="Enter your number cart" />
                          </Form.Item>
                        ) : null}
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn btn--primary btn--payment"
                >
                  {t("cartPage.buttonSummit")}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <ProductSeen />
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;
