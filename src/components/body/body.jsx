import React from "react";
import { Tabs } from "antd";
import { withRouter } from "react-router-dom";
import "./index.scss";

const { TabPane } = Tabs;

class BodyGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "home",
      paneList: [
        {
          title: "首页",
          key: "home",
          name: "home",
          path: "/home",
          closable: false,
        },
      ],
    };
  }

  // 设置tab选中
  setTabActive(menu) {
    if (!menu) {
      return;
    }
    const { paneList } = this.state;
    const element = paneList.find((item) => {
      return item.name === menu.name;
    });
    if (element) {
      this.setState({
        activeKey: element.name,
      });
    }
  }

  // 获取panel列表
  getTabPanelList(navList) {
    if (!navList.length) {
      return;
    }
    const { paneList } = this.state;
    navList.forEach((item) => {
      if (item.name === "home") {
        return;
      }
      const hasExist = paneList.some((t) => {
        return t.name === item.name;
      });
      if (!hasExist && !(item.subMenu && item.subMenu.length > 0)) {
        paneList.push({
          title: item.title,
          name: item.name,
          key: item.name,
          path: item.path,
          closable: true,
        });
      }
    });
  }

  // tab change事件
  onChange(activeKey) {
    const { paneList } = this.state;
    const { getActiveMenu } = this.props;
    const element = paneList.find((item) => {
      return item.name === activeKey;
    });
    if (element) {
      this.setState({
        activeKey: element.name,
      });
      this.props.history.push(element.path);
      getActiveMenu(element);
    }
  }

  async UNSAFE_componentWillReceiveProps(props) {
    const { activeKey } = this.state;
    await this.getTabPanelList(props.navList);
    if (activeKey !== props?.currentMenu?.name) {
      this.setTabActive(props.currentMenu);
    }
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = (targetKey) => {
    const { paneList } = this.state;
    let { activeKey } = this.state;
    let lastIndex;
    paneList.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = paneList.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ paneList: panes, activeKey });
    this.onChange(activeKey);
  };

  render() {
    const { activeKey, paneList } = this.state;
    const { render } = this.props;
    return (
      <div className="body-guide">
        <Tabs
          type="editable-card"
          onChange={(activeKey) => {
            this.onChange(activeKey);
          }}
          activeKey={activeKey}
          onEdit={this.onEdit}
          hideAdd={true}
        >
          {paneList.map((pane) => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closable={pane.closable}
            ></TabPane>
          ))}
        </Tabs>
        <div className="body">{render}</div>
      </div>
    );
  }
}

export default withRouter(BodyGuide);
