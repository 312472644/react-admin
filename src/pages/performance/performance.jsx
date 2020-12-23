import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import Skeleton from "../../components/skeleton";
import "./index.scss";

const Performance = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);


  return (
    <>
      <Skeleton name="perforSkeleton" visible={load}></Skeleton>
      <div className="performance">
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
        <Row>
          <Button type="ghost">Click</Button>
        </Row>
      </div>
    </>
  );
};

export default Performance;
