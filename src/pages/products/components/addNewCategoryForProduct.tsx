import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { addCategory } from "@/store/categorySlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  setIsAddCategory: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddNewCategoryForProduct({ setIsAddCategory }: Props) {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");

  const handleAdd = () => {
    setIsAddCategory(false);
    dispatch(addCategory({ id: 232, name: newCategory }));
  };

  const handleCancel = () => {
    setIsAddCategory(false);
  };

  return (
    <Card className="w-full p-4 gap-2">
      <h4 className="text-md font-medium">Adicionar Nova Categoria</h4>
      <div className="flex items-center gap-5">
        <Input
          placeholder="Nome da categoria"
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <div className="flex gap-2">
          <Button
            className="bg-green-600 hover:bg-green-500 text-white cursor-pointer"
            onClick={() => handleAdd()}
          >
            Adicionar
          </Button>
          <Button
            className="bg-gray-300 hover:bg-gray-200 text-black cursor-pointer"
            onClick={() => handleCancel()}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default AddNewCategoryForProduct;
