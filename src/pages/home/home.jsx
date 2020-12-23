import React from "react";
import { Row, Col, Tooltip } from "antd";
import {
  ChartCard,
  MiniArea,
  MiniProgress,
  Field,
  yuan,
} from "ant-design-pro/lib/Charts";
import Trend from "ant-design-pro/lib/Trend";
import NumberInfo from "ant-design-pro/lib/NumberInfo";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import numeral from "numeral";
import moment from "moment";

const Home = () => {
  const renderData = () => {
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
          "YYYY-MM-DD"
        ),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
    return visitData;
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24} xs={24}>
          <ChartCard
            title="搜索用户数量"
            total={numeral(8846).format("0,0")}
            contentHeight={134}
          >
            <NumberInfo
              subTitle={<span>本周访问</span>}
              total={numeral(12321).format("0,0")}
              status="up"
              subTotal={17.1}
            />
            <MiniArea line height={45} data={renderData()} />
          </ChartCard>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <ChartCard
            title="搜索用户数量"
            total={numeral(8846).format("0,0")}
            contentHeight={134}
          >
            <NumberInfo
              subTitle={<span>本周访问</span>}
              total={numeral(12321).format("0,0")}
              status="up"
              subTotal={17.1}
            />
            <MiniArea line height={45} data={renderData()} />
          </ChartCard>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          <ChartCard
            title="销售额"
            action={
              <Tooltip title="指标说明">
                <ExclamationCircleOutlined />
              </Tooltip>
            }
            total={() => (
              <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
            )}
            footer={
              <Field label="日均销售额" value={numeral(12423).format("0,0")} />
            }
            contentHeight={46}
            style={{ height: "100%" }}
          >
            <span>
              周同比
              <Trend
                flag="up"
                style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
              >
                12%
              </Trend>
            </span>
            <span style={{ marginLeft: 16 }}>
              日环比
              <Trend
                flag="down"
                style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
              >
                11%
              </Trend>
            </span>
          </ChartCard>
        </Col>
        <Col lg={12} sm={24}>
          <ChartCard
            title="移动指标"
            avatar={
              <img
                style={{ width: 56, height: 56 }}
                src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
                alt="indicator"
              />
            }
            action={
              <Tooltip title="指标说明">
                <ExclamationCircleOutlined />
              </Tooltip>
            }
            style={{ height: "100%" }}
            total={() => (
              <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
            )}
            footer={
              <Field label="日均销售额" value={numeral(12423).format("0,0")} />
            }
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24} xs={24}>
          <ChartCard
            title="线上购物转化率"
            total="78%"
            action={
              <Tooltip title="指标说明">
                <ExclamationCircleOutlined />
              </Tooltip>
            }
            footer={
              <div>
                <span>
                  周同比
                  <Trend
                    flag="up"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    12%
                  </Trend>
                </span>
                <span style={{ marginLeft: 16 }}>
                  日环比
                  <Trend
                    flag="down"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    11%
                  </Trend>
                </span>
              </div>
            }
            contentHeight={46}
            style={{ height: "100%" }}
          >
            <MiniProgress percent={78} strokeWidth={8} target={80} />
          </ChartCard>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <ChartCard
            title="线上购物转化率"
            total="78%"
            action={
              <Tooltip title="指标说明">
                <ExclamationCircleOutlined />
              </Tooltip>
            }
            footer={
              <div>
                <span>
                  周同比
                  <Trend
                    flag="up"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    12%
                  </Trend>
                </span>
                <span style={{ marginLeft: 16 }}>
                  日环比
                  <Trend
                    flag="down"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    11%
                  </Trend>
                </span>
              </div>
            }
            contentHeight={46}
            style={{ height: "100%" }}
          >
            <MiniProgress percent={78} strokeWidth={8} target={80} />
          </ChartCard>
        </Col>
      </Row>
    </>
  );
};

export default Home;
