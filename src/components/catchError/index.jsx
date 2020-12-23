import React from "react";
import { Button } from "antd";
import Exception from "ant-design-pro/lib/Exception";
class CatchError extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  reload() {
    return (
      <Button
        type="primary"
        onClick={() => {
          window.location.reload();
        }}
      >刷新</Button>
    );
  }

  render() {
    const { hasError } = this.state;
    return hasError ? (
      <Exception type="500" backText="刷新" desc="页面出错啦，请刷新页面~" actions={this.reload()}></Exception>
    ) : (
      this.props.children
    );
  }
}

export default CatchError;
