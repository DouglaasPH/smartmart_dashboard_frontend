import { Card, CardHeader } from "@/components/ui/card";
import { Target } from "lucide-react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SalesVolumeByMonthRechartForDashboard() {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const data = [
    2175, 2300, 2400, 2500, 2600, 2700, 2900, 3000, 3100, 3200, 3300, 3400,
  ];

  const salesByMonth = useMemo(() => {
    return months.map((month, index) => ({
      month,
      quantity: data[index],
    }));
  }, [data]);

  return (
    <Card className="p-5">
      <CardHeader className="flex flex-row justify-between font-medium text-gray-600 text-md">
        <p>Volume de vendas por mês</p>
        <Target size={20} />
      </CardHeader>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={salesByMonth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            formatter={(value?: number) =>
              value !== undefined ? `${value.toLocaleString()}` : ""
            }
          />
          <Legend />
          <Bar
            dataKey="quantity"
            fill="#3b82f6"
            name="Unidade vendidas"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default SalesVolumeByMonthRechartForDashboard;
