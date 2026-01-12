import { Card, CardHeader } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function RevenueOverTimeRechartForDashboard() {
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

  const revenueByMonth = useMemo(() => {
    return months.map((month, index) => ({
      month,
      revenue: data[index],
    }));
  }, [data]);

  return (
    <Card className="p-5">
      <CardHeader className="flex flex-row justify-between font-medium text-gray-600 text-md">
        <p>Receita ao longo do tempo</p>
        <DollarSign size={20} />
      </CardHeader>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={revenueByMonth}>
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
              value !== undefined ? `R$${value.toLocaleString()}` : ""
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={3}
            name="Receita (R$)"
            dot={{ fill: "#10b981", r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default RevenueOverTimeRechartForDashboard;
