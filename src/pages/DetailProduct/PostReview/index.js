import React from "react";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Rate } from "antd";
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

  const onFinish = (values) => {
    console.log(values);
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
          <Button type="primary" htmlType="submit">
            {t("button.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PostReview;
