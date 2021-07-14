import { Button, Form, Input, message, Rate } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addAReview } from "../../../actions/user";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  min: "${label} lon hon ${min}",
};

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function PostReview(props) {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { idProduct } = props;
  const user = useSelector((state) => state.user);
  const onFinish = (values) => {
    if (!user.isLogin) {
      message.warning("Login before review!");
    } else {
      dispatch(addAReview({ idProduct, nameUser: user.email, ...values }));
      message.success("Add a review success!");
      form.resetFields();
    }
  };

  return (
    <div className="detail-product__review__post">
      <h2>{t("detailProduct.addReview")}</h2>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        form={form}
      >
        <Form.Item
          label={t("productDetail.yourRating")}
          name={"rating"}
          rules={[{ required: true }]}
        >
          <Rate tooltips={desc} />
        </Form.Item>
        <Form.Item
          name={"review"}
          label={t("productDetail.review")}
          rules={[
            {
              required: true,
              min: 5,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" className="btn btn--primary">
            {t("button.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PostReview;
