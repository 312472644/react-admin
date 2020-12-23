import React, { useState } from "react";
import classnames from "classnames";
import Head from "../head/head";
import MenuGuide from "../menu/menu";
import BodyGuide from "../body/body";
import { getAllMenuList } from "../../utils";
import "./layout.scss";

const Layout = (prop) => {
  const [expand, setExpand] = useState(true);
  // 当前路由集合
  const [navList, setNavList] = useState([]);
  const [activeMenu, setActiveMenu] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("");

  const checkRouteValid = () => {
    const { location } = prop;
    const menuList = getAllMenuList();
    return menuList.some((item) => {
      return item.path === location.pathname;
    });
  };

  const renderChildren = () => {
    const isValid = checkRouteValid();
    const { location } = prop;
    let content = null;
    if (location.pathname === "/") {
      content = prop.children[0];
    } else if (isValid) {
      content = prop.children[1];
    } else {
      content = prop.children[2];
    }
    return content;
  };

  return (
    <div className={classnames("layout", expand ? "" : "shrink")}>
      {/**菜单信息 */}
      <aside>
        <MenuGuide
          expand={expand}
          getNavList={(list) => {
            setNavList(list);
          }}
          activeMenu={activeMenu}
          routerChange={(menu) => {
            setCurrentMenu(menu);
          }}
        />
      </aside>
      <section className="section">
        {/**头部信息 */}
        <Head
          navTitle={navList}
          expandEvent={(isExpand) => {
            setExpand(isExpand);
          }}
        />
        {/** 主体部分 */}
        <div className="body">
          <BodyGuide
            currentMenu={currentMenu}
            // 有多个children，下标2为匹配不到路由组件，下标1为匹配组件内容
            render={renderChildren()}
            navList={navList}
            getActiveMenu={(menu) => {
              setActiveMenu(menu);
            }}
          ></BodyGuide>
        </div>
      </section>
    </div>
  );
};

export default Layout;
