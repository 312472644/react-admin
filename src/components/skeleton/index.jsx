import React, { useEffect } from "react";
import * as config from "../../config/skeleton.config";

const Index = (props) => {
  useEffect(() => {
    props.visible ? createSkeleton() : removeSkeleton();

    // 组件销毁是调用方法
    return unMount;
  }, [props.visible, props.name]);

  const createSkeleton = () => {
    const rootElement = document.querySelector(".body-guide .body");
    const skeletonElement = document.createElement("div");
    skeletonElement.className = "skeleton";
    if (!config[props.name]) {
      console.error(`模板${props.name}不存在`);
    } else {
      skeletonElement.id = props.name;
      skeletonElement.innerHTML = config[props.name];
      rootElement && rootElement.appendChild(skeletonElement);
    }
  };

  const removeSkeleton = () => {
    const element = document.querySelector(`#${props.name}`);
    element && element.remove();
  };

  const unMount = () => {
    removeSkeleton();
  };
  return <></>;
};

export default Index;
