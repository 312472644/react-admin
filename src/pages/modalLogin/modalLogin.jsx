import React from "react";
import { Modal, Form, Input } from "antd";
import eventEmit from "../../utils/emit.js";

class ModalLogin extends React.Component {
  constructor() {
    super();
    this.formRef = "";
    this.state = {
      visible: true,
      userName: "",
      userPwd: "",
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    if (props.visible) {
      this.setState({
        visible: true,
      });
    }
  }

  handleOk = (e) => {
    this.formRef
      .validateFields()
      .then((values) => {
        // 自定义事件触发
        eventEmit.emit("getUserInfo", values);
        sessionStorage.isLogin = true;
        sessionStorage.userName = values.userName;
        this.setState({
          visible: false,
        });
      })
      .catch((error) => {});
  };

  handleCancel = (e) => {
    this.formRef.resetFields();
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Modal
        title="Login"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        cancelText="取消"
        okText="确定"
        closable={false}
        keyboard={false}
        maskClosable={false}
      >
        <Form
          name="basic"
          ref={(el) => {
            this.formRef = el;
          }}
        >
          <Form.Item
            labelCol={{ span: 5 }}
            label="账号："
            name="userName"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              autoComplete="off"
              value={this.state.userName}
              onChange={(value) => {
                this.setState({
                  userName: value,
                });
              }}
            />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 5 }}
            label="密码："
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              value={this.state.userPwd}
              onChange={(value) => {
                this.setState({
                  userPwd: value,
                });
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default ModalLogin;
