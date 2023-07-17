import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxAvgLevel > 0) {
    barFillHeight =
      Math.round((props.avgLevel / props.maxAvgLevel) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.year}</div>
      <div className="chart-bar__label">
        {Math.round(props.avgLevel * 10) / 10}
      </div>
    </div>
  );
};

export default ChartBar;
