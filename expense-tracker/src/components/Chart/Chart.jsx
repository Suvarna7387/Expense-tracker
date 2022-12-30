import React from "react";
import "../styles/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let pricesArray = props.dataPoints.map((row) => row.price);
  let maxPrice = Math.max(...pricesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((record) => {
        return (
          <ChartBar
            key={record.label}
            label={record.label}
            value={record.price}
            maxValue={maxPrice}
          />
        );
      })}
    </div>
  );
};
export default Chart;
