import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import CsvManagement from "./pages/csvManagement/CsvManagement";

const browserRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/csv-management" element={<CsvManagement />} />
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
