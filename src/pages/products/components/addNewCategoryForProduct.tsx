import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function AddNewCategoryForProduct() {
  return (
    <Card className="w-full p-4 gap-2">
      <h4 className="text-md font-medium">Adicionar Nova Categoria</h4>
      <div className="flex items-center gap-5">
        <Input placeholder="Nome da categoria" />
        <div className="flex gap-2">
          <Button className="bg-green-600 text-white">Adicionar</Button>
          <Button className="bg-gray-300 text-black">Cancelar</Button>
        </div>
      </div>
    </Card>
  );
}

export default AddNewCategoryForProduct;
