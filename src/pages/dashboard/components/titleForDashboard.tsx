function TitleForDashboard() {
  return (
    <section className="flex justify-between w-full items-start md:flex-row flex-col md:gap-auto gap-5">
      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <p className="text-gray-600">
          Visão geral completa vendas e receitas de produtos durante 12 meses.
        </p>
      </div>
    </section>
  );
}

export default TitleForDashboard;
