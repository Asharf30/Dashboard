import {
  GridComponent,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

import { ordersData, ordersGrid } from "../data/dummy";

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

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-3 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        dataSource={ordersData}
        id="gridcomponent"
        allowPaging
        allowSorting
        actionComplete={handleActionComplete}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
