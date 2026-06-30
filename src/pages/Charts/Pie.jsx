import { Header, Pie as PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-3xl">
      <Header category="Chart" title="Pie" />
      <div className="w-full">
        <PieChart
          id="pie-chart"
          data={pieChartData}
          legendVisiblity
          height="420px"
        />
      </div>
    </div>
  );
};

export default Pie;
