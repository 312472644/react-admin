import React, { useState, useEffect } from "react";
import { Breadcrumb, Dropdown, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import eventEmit from "../../utils/emit.js";
import "./index.scss";

const Head = (props) => {
  const { expandEvent, navTitle } = props;
  const [expand, setExpand] = useState(true);
  const [userName, setUserName] = useState(sessionStorage?.userName);

  useEffect(() => {
    if (!eventEmit._eventsCount) {
      // 监听自定义事件
      eventEmit.addListener("getUserInfo", (info) => {
        setUserName(info.userName);
      });
    }
  });

  const expandEventHandle = (isExpand) => {
    setExpand(isExpand);
    expandEvent(isExpand);
  };

  const exitHandle = () => {
    sessionStorage.clear();
    setUserName('');
  };

  // 下拉菜单
  const menu = (
    <Menu>
      <Menu.Item>个人中心</Menu.Item>
      <Menu.Item>设置</Menu.Item>
      <Menu.Item
        onClick={() => {
          exitHandle();
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="head-box">
      <div className="head">
        {expand ? (
          <MenuFoldOutlined
            className="icon-size"
            onClick={() => {
              expandEventHandle(false);
            }}
          />
        ) : (
          <MenuUnfoldOutlined
            className="icon-size"
            onClick={() => {
              expandEventHandle(true);
            }}
          />
        )}
        <div className="nav-title">
          <Breadcrumb separator="/">
            {navTitle.map((item) => {
              return (
                <Breadcrumb.Item key={item?.id}>{item?.title}</Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
        <div className="user-info-box">
          <Dropdown overlay={menu}>
            <div className="dropdown-trigger">
              <span>{userName ? userName : "未登录"}</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Head;
