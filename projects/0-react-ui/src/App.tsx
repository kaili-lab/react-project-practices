import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home.tsx";
import { practicePages, simplePageRoutes } from "./routes.ts";
import { Toaster } from "react-hot-toast";
import RootLayout from "./root-layout.tsx";

// Main App component
const App = () => {
  const routes = practicePages.concat(simplePageRoutes);
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              {routes.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={<page.component />}
                />
              ))}
            </Route>
          </Routes>
        </div>
      </Router>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
