import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();
  const chartBackground = currentMode === "Dark" ? "#33373E" : "#fff";
  const labelColor = currentMode === "Dark" ? "#E5E7EB" : "#111827";
  const axisLineColor = currentMode === "Dark" ? "#4B5563" : "#E5E7EB";

  const primaryXAxis = {
    ...LinePrimaryXAxis,
    background: chartBackground,
    labelStyle: { color: labelColor },
    lineStyle: { color: axisLineColor },
    majorTickLines: { width: 0 },
  };

  const primaryYAxis = {
    ...LinePrimaryYAxis,
    labelStyle: { color: labelColor },
    lineStyle: { color: axisLineColor },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  return (
    <ChartComponent
      id="line-chart"
      primaryYAxis={primaryYAxis}
      primaryXAxis={primaryXAxis}
      height="420px"
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ textStyle: { color: labelColor } }}
      background={chartBackground}
    >
      <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
