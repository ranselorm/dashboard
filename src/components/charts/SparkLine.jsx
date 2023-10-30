import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { SparklineAreaData } from "../../data/dummy";

const SparkLine = ({ id, currentColor, data, type, height, width, color }) => {
  // console.log(id, currentColor, data);
  return (
    <SparklineComponent
      id="line-sparline"
      height="80px"
      width="200px"
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: "blue", width: 2 }}
      dataSource={SparklineAreaData}
      xName="x"
      yName="y"
      type="Line"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
