import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { SparklineAreaData } from "../../data/dummy";

const SparkLine = ({
  id,
  currentColor,
  data,
  type,
  height,
  width,
  color,
  xName,
  yName,
}) => {
  return (
    <SparklineComponent
      id="sparkline"
      height="70px"
      width="250px"
      lineWidth={1}
      fill="blue"
      border={{ color: "blue", width: 4 }}
      valueType="Numeric"
      dataSource={SparklineAreaData}
      xName="xval"
      yName="yval"
      type="Line"
      tooltipSettings={{
        visible: true,
        format: "${xval} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
