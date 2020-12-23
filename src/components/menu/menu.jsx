import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input, Menu } from "antd";
import { logo } from "../../assets/images";
import MenuList from "../../config/router/menu";
import { getAllMenuList, getParentNode } from "../../utils";
import "./index.scss";
const { Search } = Input;
const MenuGuide = (props) => {
  const history = useHistory();
  const { expand, getNavList, routerChange, activeMenu } = props;
  const [selectKey, setSelectKey] = useState(["1"]);
  const [openKeys, setOpenKeys] = useState([]);
  const [menuList, setMenuList] = useState(MenuList);

  useEffect(() => {
    if (activeMenu?.path) {
      menuClick(activeMenu);
    } else {
      setMenuActive();
    }
  }, [activeMenu]);

  // 设置菜单选中
  const setMenuActive = () => {
    let menu = "";
    const navList = [];
    const hrefList = window.location.href.split("#");
    const pathList = hrefList[hrefList.length - 1].split("/").filter((item) => {
      return Boolean(item);
    });
    // 无子节点
    if (pathList.length === 1) {
      menu = MenuList.find((item) => {
        return item.name === pathList[pathList.length - 1];
      });
      setOpenKeys([]);
      if (menu) {
        navList.push(menu);
      }
    }
    // 有子节点
    else if (pathList.length === 2) {
      const parentMenu = MenuList.find((item) => {
        return item.name === pathList[pathList.length - 2];
      });
      menu = parentMenu?.subMenu?.find((item) => {
        return item.name === pathList[pathList.length - 1];
      });
      if (parentMenu && menu) {
        navList.push(parentMenu, menu ? menu : []);
        setOpenKeys([parentMenu.id.toString()]);
      }
    }

    if (menu) {
      routerChange(menu);
    }
    setSelectKey([menu ? menu.id.toString() : "1"]);
    getNavList(navList);
    document.title = menu ? menu.title : "React App";
  };

  // 菜单点击
  const menuClick = (router) => {
    history.push({
      pathname: router.path,
      state: true,
    });
    setMenuActive();
  };

  // 子节点展开收缩事件
  const onChange = (keys) => {
    const parentMenuList = [];
    MenuList.forEach((item) => {
      if (item.subMenu?.length) {
        parentMenuList.push(item.id);
      }
    });

    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (parentMenuList.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // 搜索框过滤菜单
  const onSearch = (value) => {
    const filterResult = getAllMenuList().filter((item) => {
      return item.title.includes(value?.toString().trim());
    });

    if (!value || !filterResult) {
      setOpenKeys([]);
      setMenuList(MenuList);
      return;
    }

    const parentNodeList = [];
    const parentNodeIdList = [];
    filterResult.forEach((_t) => {
      const parentNode = getParentNode(_t.id);
      if (parentNode) {
        parentNodeList.push(parentNode);
        parentNodeIdList.push(parentNode.id.toString());
      }
    });
    // 子节点
    setMenuList(parentNodeList || filterResult);
    setOpenKeys(parentNodeIdList);
  };

  return (
    <div className="menu-guide">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt=""></img>
          <span className="logo-text">React App</span>
        </div>
        <div className="menu-box">
          <Search
            className="search-box"
            placeholder="搜索菜单"
            onSearch={onSearch}
            size="middle"
          ></Search>
          <Menu
            openKeys={openKeys}
            onOpenChange={onChange}
            selectedKeys={selectKey}
            className="antd-menu"
            mode="inline"
            theme="dark"
            inlineCollapsed={!expand}
          >
            {menuList.length ? (
              menuList.map((item) => {
                return item?.subMenu?.length ? (
                  <Menu.SubMenu
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                  >
                    {item?.subMenu.map((subMenu) => {
                      return (
                        <Menu.Item
                          key={subMenu.id}
                          icon={subMenu.icon}
                          onClick={() => {
                            menuClick(subMenu, item);
                          }}
                        >
                          {subMenu.title}
                        </Menu.Item>
                      );
                    })}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item
                    key={item.id}
                    icon={item.icon}
                    onClick={() => {
                      menuClick(item);
                    }}
                  >
                    {item.title}
                  </Menu.Item>
                );
              })
            ) : (
              <div className="no-menu">没有找到相应的数据~</div>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MenuGuide;
