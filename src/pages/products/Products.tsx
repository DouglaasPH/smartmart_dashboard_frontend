import SearchAndFilterForProduct from "./components/SearchAndFilterForProduct";
import TitleAndButtonsForProducts from "./components/titleAndButtonsForProducts";

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-col h-16 mt-20 gap-8">
        <TitleAndButtonsForProducts />
        <SearchAndFilterForProduct />
      </div>
    </div>
  );
}

export default Products;
