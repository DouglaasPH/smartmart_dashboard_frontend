import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import CsvManagement from "./pages/csvManagement/CsvManagement";
import Navbar from "./components/application/navbar";

const browserRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <>
            <Navbar />
            <Dashboard />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Navbar />
            <Products />
          </>
        }
      />
      <Route
        path="/csv-management"
        element={
          <>
            <Navbar />
            <CsvManagement />
          </>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
