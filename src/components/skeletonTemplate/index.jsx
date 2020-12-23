import React, { useEffect, useState } from "react";
import "./index.scss";
const createSkeletonHTML = require("@nutui/draw-page-structure/evalDOM");

const SkeletonTemplate = (props) => {
  const [skeletonHTML, setSkeletonHTML] = useState("");
  useEffect(() => {
    createSkeletonHTML({
      background:
        "linear-gradient(90deg,hsla(0,0%,74.5%,.2) 25%,hsla(0,0%,50.6%,.24) 37%,hsla(0,0%,74.5%,.2) 63%)",
      animation: "skeleton-anima 1s ease infinite;",
    }).then((html) => {
      setSkeletonHTML(html);
      console.log(html);
    });
  }, []);

  return (
    <>
      <div
        className="skeleton"
        dangerouslySetInnerHTML={{ __html: skeletonHTML }}
      ></div>
      {props.children}
    </>
  );
};

export default SkeletonTemplate;
