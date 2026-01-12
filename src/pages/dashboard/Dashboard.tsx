// react
import { useState } from "react";

// components
import AllCardsForDashboard from "./components/allCardsForDashboard";
import TitleAndSelectCategoriesForDashboard from "./components/titleAndSelectCategoriesForDashboard";

function Dashboard() {
  const [dataForCards, setDataForCards] = useState({
    total_products: 12,
    total_sales: 32622,
    total_revenue: 4144114,
    average_price: 240.67,
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-col h-16 mt-20 gap-8">
        <TitleAndSelectCategoriesForDashboard />
        <AllCardsForDashboard data={dataForCards} />
      </div>
    </div>
  );
}

export default Dashboard;
