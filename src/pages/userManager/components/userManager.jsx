/* eslint-disable no-useless-constructor */
import React from "react";
import { observer, inject } from "mobx-react";
import { Button, Table, Row, Col, Input } from "antd";
import "./index.scss";

@inject("userStore")
@observer
class UserManager extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { userStore } = this.props;
    userStore.getTableList();
  }

  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "性别",
        dataIndex: "sex",
        key: "sex",
      },
      {
        title: "工作",
        dataIndex: "job",
        key: "job",
      },
    ];
    const { userStore } = this.props;
    const { tableList } = userStore;
    return (
      <div className="user-manager">
        <Row className="row">
          <Col md={4} className="col-item">
            <label>姓名：</label>
            <Input
              placeholder="请输入关键字查询"
              value={userStore.queryName}
              onChange={(e) => {
                userStore.setInputValue(e);
              }}
            ></Input>
          </Col>
        </Row>
        <Row className="row flex-center">
          <Button
            type="primary"
            onClick={() => {
              userStore.queryData();
            }}
          >
            查询
          </Button>
          <Button
            type="default"
            onClick={() => {
              userStore.reset();
            }}
          >
            重置
          </Button>
        </Row>
        <Table
          rowKey="id"
          loading={userStore.loading}
          dataSource={tableList}
          columns={columns}
          bordered
          size="middle"
        ></Table>
      </div>
    );
  }

  queryHandle = () => {
    throw new Error("边界测试");
  };
}

export default UserManager;
