import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  const chartBackground = currentMode === "Dark" ? "#33373E" : "#fff";
  const labelColor = currentMode === "Dark" ? "#E5E7EB" : "#111827";
  const axisLineColor = currentMode === "Dark" ? "#4B5563" : "#E5E7EB";

  const primaryXAxis = {
    ...areaPrimaryXAxis,
    background: chartBackground,
    labelStyle: { color: labelColor },
    lineStyle: { color: axisLineColor },
    majorTickLines: { width: 0 },
  };

  const primaryYAxis = {
    ...areaPrimaryYAxis,
    labelStyle: { color: labelColor },
    lineStyle: { color: axisLineColor },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-3xl">
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent
        id="area-chart"
        primaryYAxis={primaryYAxis}
        primaryXAxis={primaryXAxis}
        height="420px"
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ textStyle: { color: labelColor } }}
        background={chartBackground}
      >
        <Inject services={[DateTime, Legend, Tooltip, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
