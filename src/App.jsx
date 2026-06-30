import { lazy, Suspense, memo } from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";

// Lazy-load all pages for code splitting
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Orders = lazy(() => import("./pages/Orders"));
const Employees = lazy(() => import("./pages/Employees"));
const Customers = lazy(() => import("./pages/Customers"));
const Kanban = lazy(() => import("./pages/Kanban"));
const Editor = lazy(() => import("./pages/Editor"));
const Calendar = lazy(() => import("./pages/Calendar"));
const ColorPicker = lazy(() => import("./pages/ColorPicker"));
const Line = lazy(() => import("./pages/Charts/Line"));
const Area = lazy(() => import("./pages/Charts/Area"));
const Bar = lazy(() => import("./pages/Charts/Bar"));
const Pie = lazy(() => import("./pages/Charts/Pie"));
const Financial = lazy(() => import("./pages/Charts/Financial"));
const ColorMapping = lazy(() => import("./pages/Charts/ColorMapping"));
const Pyramid = lazy(() => import("./pages/Charts/Pyramid"));
const Stacked = lazy(() => import("./pages/Charts/Stacked"));

const PageWrapper = memo(({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ overflow: "hidden" }}
  >
    {children}
  </motion.div>
));

const AppContent = () => {
  const { themeSettings } = useStateContext();

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {themeSettings && <ThemeSettings />}
      <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" /></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Ecommerce /></PageWrapper>} />
          <Route path="/ecommerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
          <Route path="/orders" element={<PageWrapper><Orders /></PageWrapper>} />
          <Route path="/employees" element={<PageWrapper><Employees /></PageWrapper>} />
          <Route path="/customers" element={<PageWrapper><Customers /></PageWrapper>} />
          <Route path="/kanban" element={<PageWrapper><Kanban /></PageWrapper>} />
          <Route path="/editor" element={<PageWrapper><Editor /></PageWrapper>} />
          <Route path="/calendar" element={<PageWrapper><Calendar /></PageWrapper>} />
          <Route path="/color-picker" element={<PageWrapper><ColorPicker /></PageWrapper>} />
          <Route path="/line" element={<PageWrapper><Line /></PageWrapper>} />
          <Route path="/area" element={<PageWrapper><Area /></PageWrapper>} />
          <Route path="/bar" element={<PageWrapper><Bar /></PageWrapper>} />
          <Route path="/pie" element={<PageWrapper><Pie /></PageWrapper>} />
          <Route path="/financial" element={<PageWrapper><Financial /></PageWrapper>} />
          <Route path="/color-mapping" element={<PageWrapper><ColorMapping /></PageWrapper>} />
          <Route path="/pyramid" element={<PageWrapper><Pyramid /></PageWrapper>} />
          <Route path="/stacked" element={<PageWrapper><Stacked /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  const { activeMenu, setThemeSettings, currentColor, currentMode } =
    useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent
              content="Settings"
              position="Top"
              offsetX={24}
              offsetY={-6}
            >
              <button
                className="text-3xl p-3  hover:bg-light-gray hover:box-shadow-xl rounded-full text-white "
                onClick={() => setThemeSettings(true)}
                style={{
                  background: currentColor,

                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg" />
          )}
          <div
            className={`dark:bg-main-dark-bg   bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed navbar w-full md:static bg-main-bg dark:bg-main-dark-bg ">
              <Navbar />
            </div>
            <div>
              <AppContent />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
