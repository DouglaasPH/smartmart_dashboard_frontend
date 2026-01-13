import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Product } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  setIsEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setDataForEditProduct: React.Dispatch<React.SetStateAction<Product>>;
}

function TableForProducts({ setIsEditProduct, setDataForEditProduct }: Props) {
  const allColumns = [
    "MARCA",
    "NOME DO PRODUTO",
    "DESCRIÇÃO",
    "PREÇO",
    "CATEGORIA",
    "AÇÕES",
  ];

  const [data, setData] = useState<Product[]>([
    {
      id: 2,
      name: "LG OLED55C1",
      description:
        "55-inch OLED 4K Smart TV with AI ThinQ and G-Sync compatibility",
      price: "1499.99",
      category: {
        id: 1,
        name: "TVs",
      },
      brand: "LG",
    },
  ]);

  const handleDelete = (product_id: number) => {
    setData(data.filter((item) => item.id !== product_id));
  };

  const handleModify = (product: Product) => {
    setDataForEditProduct(product);
    setIsEditProduct(true);
  };

  return (
    <Card className="w-full p-4">
      <Table>
        <TableHeader>
          <TableRow>
            {allColumns.map((column) => (
              <TableHead>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price.toLocaleString()}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell className="flex flex-row gap-5">
                <span className="cursor-pointer hover:bg-blue-50 rounded-sm p-1">
                  <Pencil
                    className="size-4 text-blue-600"
                    onClick={() => handleModify(product)}
                  />
                </span>
                <span className="cursor-pointer hover:bg-red-50 rounded-sm p-1">
                  <Trash2
                    className="size-4 text-red-600 cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TableForProducts;
