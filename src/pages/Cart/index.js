import {
  Button,
  Collapse,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Radio,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   deleteCartItem,
//   deleteListCartOrdered,
//   sendListPayment,
//   updateQuantityCart,
// } from "../../actions/user";
import ProductSeen from "../../components/ProductSeen";
import ShowBill from "./ShowBill";
import "./style.scss";
const { Panel } = Collapse;

function CartPage(props) {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  // const dispatch = useDispatch();
  const [payment, setPaymnet] = useState("Payment on delivery");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 4,
  });
  const [listOrder, setListOrder] = useState([]);
  const [totalMoneyListOrder, setTotalMoneyListOrder] = useState(0);
  const [disabledInput, setDisabledInput] = useState([]);

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
          disabled={disabledInput.includes(id + color + size) ? true : false}
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

  useEffect(() => {
    setData(
      cart.map((item) => ({
        key: item.id + item.color + item.size,
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
      }))
    );
  }, [cart]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setDisabledInput([...selectedRowKeys]);
      let total = selectedRows.reduce((totalNow, item) => {
        return totalNow + item.total;
      }, 0);
      setTotalMoneyListOrder(total);
      setListOrder([...selectedRows]);
    },
  };

  function updateQuantityCartItem(value, id, color, size) {
    // dispatch(updateQuantityCart(value, id, color, size));
  }

  function handleDeleteCartItem(id) {
    // dispatch(deleteCartItem(id));
    message.success("Delete product successfully!");
  }

  function onChangePayment(e) {
    setPaymnet(e.target.value);
  }

  function openModalOrder() {
    if (user.isLogin) {
      if (listOrder.length === 0) {
        message.warning("Please chose a product!");
      } else {
        setIsModalVisible(true);
      }
    } else {
      message.warning("Please login!");
    }
  }

  function onSubmitPayment(values) {
    // dispatch(
    //   sendListPayment({
    //     idUser: user.id,
    //     listPayment: listOrder,
    //     typePayment: payment,
    //     ...values,
    //     address: values.address ? values.address : user.address,
    //   })
    // );
    setIsModalVisible(false);
    // dispatch(deleteListCartOrdered(listOrder));
    setListOrder([]);
    setTotalMoneyListOrder(0);
    message.success("Order success!");
  }

  function handleTableChange(pagination) {
    setPagination(pagination);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="cart-page mt-50">
      <Container>
        <Row>
          <Col xl={8} sm={12}>
            <div className="cart-page__table">
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
                <ShowBill
                  listOrder={listOrder}
                  totalMoneyListOrder={totalMoneyListOrder}
                />
              </ul>
              <Form onFinish={openModalOrder}>
                <Form.Item
                  name="payment"
                  label={t("cartPage.typePayment")}
                  rules={[
                    {
                      required: true,
                      message: `${t("cartPage.paymentRequired")}`,
                    },
                  ]}
                >
                  <Radio.Group onChange={onChangePayment}>
                    <Space direction="vertical">
                      <Radio value={"Payment on delivery"}>
                        {t("cartPage.chekbox1")}
                      </Radio>
                      <Radio value={"Payment by card"}>
                        {t("cartPage.chekbox2")}
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn btn--primary btn--payment"
                >
                  Process Order
                </Button>
              </Form>
              <Modal
                title="Your Order"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={""}
                width={800}
              >
                <div className="cart-page__modal">
                  <Row>
                    <Col xl={6} sm={12}>
                      <ShowBill
                        listOrder={listOrder}
                        totalMoneyListOrder={totalMoneyListOrder}
                      />
                    </Col>
                    <Col xl={6} sm={12}>
                      <Form labelCol={{ span: 8 }} onFinish={onSubmitPayment}>
                        <Collapse
                          expandIcon={() => (
                            <i className="fas fa-map-marker-alt"></i>
                          )}
                          ghost={true}
                        >
                          <Panel header="Change address ?" key="1">
                            <Form.Item label="Address New" name="address">
                              <Input />
                            </Form.Item>
                          </Panel>
                        </Collapse>
                        <li className="cart-page__order__list__item">
                          <span className="color-dark">
                            {t("cartPage.typePayment")}:{" "}
                          </span>
                          <span className="color-dark">{payment}</span>
                        </li>
                        {payment === "Payment by card" ? (
                          <>
                            <h2>Information Card</h2>
                            <Form.Item
                              label="Number Card"
                              name="numberCard"
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
                            <Form.Item
                              label="Name bank"
                              name="nameBank"
                              rules={[
                                {
                                  required: true,
                                  message: `${t("cartPage.bankRequiredInput")}`,
                                },
                              ]}
                            >
                              <Input placeholder="Enter your number cart" />
                            </Form.Item>
                          </>
                        ) : null}
                        <div className="cart-page__modal__btn">
                          <Button onClick={handleCancel} className="btn--close">
                            Close
                          </Button>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="btn btn--primary btn--payment"
                          >
                            Submit Order
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Modal>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12} sm={12}>
            <ProductSeen />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;
