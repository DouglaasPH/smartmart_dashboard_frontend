// react
import { useState } from "react";

// components
import AddNewCategoryForProduct from "./components/addNewCategoryForProduct";
import CardOfEditProductForProduct from "./components/cardOfEditProductForProduct";
import SearchAndFilterForProduct from "./components/SearchAndFilterForProduct";
import TableForProducts from "./components/tableForProducts";
import TitleAndButtonsForProducts from "./components/titleAndButtonsForProducts";

// types
import type { Product } from "@/types";
import AddNewProductForProduct from "./components/addNewProductForProduct";
import PaginationForProduct from "./components/paginationForProduct";

function Products() {
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todas categorias");
  const [inputSearch, setInputSearch] = useState("");
  const [dataForEditProduct, setDataForEditProduct] = useState<Product>({
    id: 2,
    name: "LG OLED55C1",
    description:
      "55-inch OLED 4K Smart TV with AI ThinQ and G-Sync compatibility",
    price: "1499.99",
    category: {
      id: 1,
      name: "TVs",
    },
    brand: "LG",
  });
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-col my-20 gap-8">
        <TitleAndButtonsForProducts
          setIsAddCategory={setIsAddCategory}
          setIsAddProduct={setIsAddProduct}
        />
        {isAddCategory ? (
          <AddNewCategoryForProduct setIsAddCategory={setIsAddCategory} />
        ) : null}
        {isAddProduct ? (
          <AddNewProductForProduct setIsAddProduct={setIsAddProduct} />
        ) : null}
        <SearchAndFilterForProduct
          selectedCategory={selectedCategory}
          setInputSearch={setInputSearch}
          setSelectedCategory={setSelectedCategory}
        />
        <TableForProducts
          setIsEditProduct={setIsEditProduct}
          setDataForEditProduct={setDataForEditProduct}
          selectedCategory={selectedCategory}
          inputSearch={inputSearch}
          setTotalPages={setTotalPages}
          currentPage={currentPage}
        />
        {isEditProduct ? (
          <CardOfEditProductForProduct
            data={dataForEditProduct}
            setData={setDataForEditProduct}
            setIsEditProduct={setIsEditProduct}
          />
        ) : null}
        <PaginationForProduct
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Products;
