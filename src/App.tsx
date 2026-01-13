import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Navbar from "./components/application/navbar";
import { request_to_list_category } from "./api/services_categories";
import { useDispatch } from "react-redux";
import { addCategory } from "./store/categorySlice";
import type { Category, Product } from "./types";
import { request_to_list_products } from "./api/services_products";
import { addProduct } from "./store/productSlice";
import { useEffect } from "react";

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
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const allCategories = async () => {
      const request: Category[] = await request_to_list_category();
      for (const index in request) {
        dispatch(addCategory(request[index]));
      }
    };
    const allProducts = async () => {
      const request: Product[] = await request_to_list_products();
      for (const index in request) {
        dispatch(addProduct(request[index]));
      }
    };

    allCategories();
    allProducts();
  }, []);
  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
