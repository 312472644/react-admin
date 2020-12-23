import React from "react";
import { TimelineChart } from "ant-design-pro/lib/Charts";

class SystemTool extends React.Component {
  static defaultProps = {
    count: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      defaultValue: 100,
    };
  }
  chartData() {
    const chartData = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
    return chartData;
  }
  render() {
    return (
      <>
        <TimelineChart
          height={400}
          data={this.chartData()}
          titleMap={{ y1: "客流量", y2: "支付笔数" }}
        />
      </>
    );
  }
}

export default SystemTool;
