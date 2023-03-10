import React from "react";
import "../styles/ChartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";
  let overExpense;
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  if (parseInt(barHeight) > 75) {
    overExpense = "red";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barHeight, background: overExpense }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
