import {
  GridComponent,
  ColumnsDirective,
  Page,
  Search,
  Inject,
  ColumnDirective,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

import { employeesData, employeesGrid } from "../data/dummy";

const smoothScrollToTop = () => {
  setTimeout(() => {
    const duration = 600;
    const start = window.scrollY;
    const startTime = performance.now();
    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) requestAnimationFrame(scroll);
    };
    requestAnimationFrame(scroll);
  }, 100);
};

const handleActionComplete = (args) => {
  if (args.requestType === "paging") {
    smoothScrollToTop();
  }
};

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-3 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        actionComplete={handleActionComplete}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
