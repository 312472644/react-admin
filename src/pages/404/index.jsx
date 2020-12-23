import React from "react";
import Exception from "ant-design-pro/lib/Exception";

const PageNotFound = () => {
  return <Exception type="404" backText="返回首页"  redirect="/#/home" />;
};
export default PageNotFound;
