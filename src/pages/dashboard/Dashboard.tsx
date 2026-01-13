// react
import { useState } from "react";

// components
import AllCardsForDashboard from "./components/allCardsForDashboard";
import TitleAndSelectCategoriesForDashboard from "./components/titleAndSelectCategoriesForDashboard";
import SalesVolumeByMonthRechartForDashboard from "./components/salesVolumeByMonthRechartForDashboard";
import RevenueOverTimeRechartForDashboard from "./components/RevenueOverTimeRechartForDashboard";

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Todas categorias");
  const [dataForCards, setDataForCards] = useState({
    total_products: 12,
    total_sales: 32622,
    total_revenue: 4144114,
  });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-col h-16 mt-20 gap-8">
        <TitleAndSelectCategoriesForDashboard
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AllCardsForDashboard data={dataForCards} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
          <SalesVolumeByMonthRechartForDashboard />
          <RevenueOverTimeRechartForDashboard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
