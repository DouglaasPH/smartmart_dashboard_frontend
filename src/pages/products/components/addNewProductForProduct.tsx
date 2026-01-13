import { request_to_create_product } from "@/api/services_products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/store/productSlice";
import type { RootState } from "@/store/store";
import type { Product } from "@/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  setIsAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddNewProductForProduct({ setIsAddProduct }: Props) {
  const dispatch = useDispatch();
  const allCategories = useSelector((state: RootState) => state.category);
  const [data, setData] = useState<Product>({
    id: 0,
    brand: "",
    name: "",
    description: "",
    price: 0,
    category: {
      id: 0,
      name: "",
    },
  });

  const handleCreate = async () => {
    try {
      const response = await request_to_create_product(
        data.name,
        data.description,
        data.brand,
        data.price,
        data.category.id
      );
      dispatch(addProduct(response));
    } catch (error) {
      console.error(error);
    }
    setIsAddProduct(false);
    return;
  };

  const handleCancel = () => {
    setIsAddProduct(false);
    return;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <Card className="relative z-10 w-full max-w-xl p-6">
        <h4 className="font-semibold text-2xl">Adicionar produto</h4>
        <div className="space-y-4">
          <span className="text-sm text-gray-600">Marca</span>
          <Input
            value={data.brand}
            onChange={(e) => setData({ ...data, brand: e.target.value })}
          />
        </div>
        <div>
          <span className="text-sm text-gray-600">Nome do produto</span>
          <Input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <span className="text-sm text-gray-600">Descrição</span>
          <Textarea
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div>
          <span className="text-sm text-gray-600">Preço</span>
          <Input
            value={data.price}
            onChange={(e) =>
              setData({ ...data, price: Number(e.target.value) })
            }
            type="number"
          />
        </div>
        <div>
          <span className="text-sm text-gray-600">Categoria</span>
          <Select
            onValueChange={(v) =>
              setData({
                ...data,
                category: {
                  id: Number(v),
                  name: "",
                },
              })
            }
          >
            <SelectTrigger className="w-full bg-gray-100 font-medium text-gray-700">
              <SelectValue placeholder={data.category.name} />
            </SelectTrigger>
            <SelectContent>
              {allCategories.map((category) => (
                <SelectItem
                  value={String(category.id)}
                  onClick={() => setData({ ...data, category: category })}
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-5">
          <Button
            className="w-40 bg-green-600 hover:bg-green-700 cursor-pointer"
            onClick={() => handleCreate()}
          >
            Criar
          </Button>
          <Button
            className="w-40 bg-red-600 hover:bg-red-700 cursor-pointer"
            onClick={() => handleCancel()}
          >
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default AddNewProductForProduct;
