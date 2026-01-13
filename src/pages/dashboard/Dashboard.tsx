// components
import TitleForDashboard from "./components/titleForDashboard";
import SalesVolumeByMonthRechartForDashboard from "./components/salesVolumeByMonthRechartForDashboard";
import RevenueOverTimeRechartForDashboard from "./components/revenueOverTimeRechartForDashboard";
import { useEffect, useState } from "react";
import { request_to_list_sale } from "@/api/services_sales";
import type { Sale } from "@/types";

function Dashboard() {
  const [data, setData] = useState<Sale[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await request_to_list_sale();
      setData(response);
    };

    request();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-col h-16 mt-20 gap-30">
        <TitleForDashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
          <SalesVolumeByMonthRechartForDashboard dataForGraphic={data} />
          <RevenueOverTimeRechartForDashboard dataForGraphic={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
