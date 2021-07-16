import { Button, Input, message, Popconfirm, Space, Table } from "antd";
import Form from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../../actions/user";
import "./style.scss";

function UserAdminPage(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  function handleDeleteUser(e) {
    console.log(e);
    // message.success("Click on Yes");
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleEditUser = (id, data) => {};
  const handleKeySearch = () => {};
  const columns = [
    {
      title: "ID User",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (value) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDeleteUser(value)}
            okText="Yes"
            cancelText="No"
            className="btn-cursor"
          >
            <i className="fas fa-trash"></i>
          </Popconfirm>
          <Button
            className="btn--editProduct"
            onClick={() => handleEditUser(value)}
          >
            <i class="fas fa-pen"></i>
          </Button>
        </Space>
      ),
    },
  ];

  const data = user.listUser.map((user) => {
    return {
      key: user.id,
      id: user.id,
      email: user.email,
    };
  });

  return (
    <div className="product-admin-page">
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className="product-admin-page__action user-admin-page__action d-flex align-items-center">
        <Input placeholder="Search User..." onChange={handleKeySearch} />
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default UserAdminPage;
