import { Button } from "@/components/ui/button";
import { Plus, Tag } from "lucide-react";

function TitleAndButtonsForProducts() {
  return (
    <section className="flex justify-between w-full items-start md:flex-row flex-col md:gap-auto gap-5">
      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Gestão de Produtos</h1>
        <p className="text-gray-600">Gerencie seu catálogo de produtos.</p>
      </div>

      {/* Buttons */}
      <div className="md:w-auto w-full flex gap-3 flex-col sm:flex-row">
        <Button className="bg-green-600">
          <Tag />
          <span>Adicionar Categoria</span>
        </Button>
        <Button className="bg-blue-600">
          <Plus />
          Adicionar Produto
        </Button>
      </div>
    </section>
  );
}

export default TitleAndButtonsForProducts;
