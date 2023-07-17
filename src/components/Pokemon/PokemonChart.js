import Chart from "../Chart/Chart";

const PokemonChart = (props) => {
  const chartDataPoints = [
    { year: "2019", avgLevel: 0, counter: 0 },
    { year: "2020", avgLevel: 0, counter: 0 },
    { year: "2021", avgLevel: 0, counter: 0 },
    { year: "2022", avgLevel: 0, counter: 0 },
    { year: "2023", avgLevel: 0, counter: 0 },
  ];

  for (const pokemon of props.partyList) {
    if (pokemon.caughtDate.getFullYear() === 2019) {
      chartDataPoints[0].avgLevel += pokemon.level;

      chartDataPoints[0].counter++;
    } else if (pokemon.caughtDate.getFullYear() === 2020) {
      chartDataPoints[1].avgLevel += pokemon.level;
      chartDataPoints[1].counter++;
    } else if (pokemon.caughtDate.getFullYear() === 2021) {
      chartDataPoints[2].avgLevel += pokemon.level;
      chartDataPoints[2].counter++;
    } else if (pokemon.caughtDate.getFullYear() === 2022) {
      chartDataPoints[3].avgLevel += pokemon.level;
      chartDataPoints[3].counter++;
    } else if (pokemon.caughtDate.getFullYear() === 2023) {
      chartDataPoints[4].avgLevel += pokemon.level;
      chartDataPoints[4].counter++;
    }
  }
  for (let i = 0; i < chartDataPoints.length; i++) {
    chartDataPoints[i].avgLevel =
      chartDataPoints[i].avgLevel / chartDataPoints[i].counter;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default PokemonChart;
