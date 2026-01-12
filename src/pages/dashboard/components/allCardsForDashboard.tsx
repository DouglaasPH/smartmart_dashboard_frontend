import { Card } from "@/components/ui/card";
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { useState } from "react";

function AllCardsForDashboard() {
  const [data, setData] = useState({
    total_products: 12,
    total_sales: 32622,
    total_revenue: 4144114,
    average_price: 240.67,
  });
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 w-full">
      <Card className=" justify-center gap-2 p-5">
        <div className="bg-blue-100 w-10 h-10 flex justify-center items-center rounded-md">
          <Package className="size-6 text-blue-600" />
        </div>
        <p className="font-semibold text-2xl">{data.total_products}</p>
        <span className="text-sm text-gray-500">Total de Produtos</span>
      </Card>
      <Card className=" justify-center gap-2 p-5">
        <div className="bg-green-100 w-10 h-10 flex justify-center items-center rounded-md">
          <ShoppingCart className="size-6 text-green-600" />
        </div>

        <p className="font-semibold text-2xl">{data.total_sales}</p>
        <span className="text-sm text-gray-500">
          Total de Vendas (Unidades)
        </span>
      </Card>
      <Card className=" justify-center gap-2 p-5">
        <div className="bg-purple-100 w-10 h-10 flex justify-center items-center rounded-md">
          <DollarSign className="size-6 text-purple-600" />
        </div>
        <p className="font-semibold text-2xl">R${data.total_revenue}</p>
        <span className="text-sm text-gray-500">Total de Receita</span>
      </Card>
      <Card className=" justify-center gap-2 p-5">
        <div className="bg-orange-100 w-10 h-10 flex justify-center items-center rounded-md">
          <TrendingUp className="size-6 text-orange-600" />
        </div>
        <p className="font-semibold text-2xl">R${data.average_price}</p>
        <span className="text-sm text-gray-500">Preço Médio</span>
      </Card>
    </section>
  );
}

export default AllCardsForDashboard;
