import React from "react";
import { Button } from "antd";

class Resource extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4, 5],
      msg: "测试",
    };
  }

  delete = () => {
    const list = this.state.list;
    list.pop();
    this.setState({ list: [...list] });
  };
  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        {this.state.list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <Button onClick={this.delete}>删除</Button>
      </>
    );
  }
}

export default Resource;
