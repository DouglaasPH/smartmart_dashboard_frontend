import { request_to_export_sales } from "@/api/services_sales";
import { Button } from "@/components/ui/button";

function TitleForDashboard() {
  const handleExportSales = async () => {
    try {
      const blob = await request_to_export_sales();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "sales.csv";
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="flex justify-between w-full items-start md:flex-row flex-col md:gap-auto gap-5">
      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <p className="text-gray-600">
          Visão geral completa vendas e receitas de produtos durante 12 meses
          an.
        </p>
      </div>
      <div className="w-full md:w-auto">
        <Button
          className="bg-blue-600 hover:bg-blue-500 cursor-pointer w-full md:w-auto"
          onClick={() => handleExportSales()}
        >
          Exportar vendas (CSV)
        </Button>
      </div>
    </section>
  );
}

export default TitleForDashboard;
