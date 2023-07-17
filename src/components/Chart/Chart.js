import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const avgLevelArray = props.dataPoints?.map(
    (caughtPokemon) => caughtPokemon.avgLevel
  );
  console.log(avgLevelArray);

  const filteredLevelArray = avgLevelArray.filter((levelArray) => {
    return !isNaN(levelArray);
  });

  /*Use spread function to separate the objects into indiv. values*/

  const maxAvg = Math.max(...filteredLevelArray);
  console.log(maxAvg);
  return (
    <div className="chart">
      {/*Will map dataPoints array to ChartBar to dynamically create
      corresponding chartbars*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.year}
          avgLevel={dataPoint.avgLevel}
          maxAvgLevel={maxAvg}
          year={dataPoint.year}
        />
      ))}
    </div>
  );
};

export default Chart;
