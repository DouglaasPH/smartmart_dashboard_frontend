import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { removeProduct } from "@/store/productSlice";
import type { RootState } from "@/store/store";
import type { Product } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import NoFound from "./noFound";

interface Props {
  setIsEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setDataForEditProduct: React.Dispatch<React.SetStateAction<Product>>;
  selectedCategory: string;
}

function TableForProducts({
  setIsEditProduct,
  setDataForEditProduct,
  selectedCategory,
}: Props) {
  const allColumns = [
    "MARCA",
    "NOME DO PRODUTO",
    "DESCRIÇÃO",
    "PREÇO",
    "CATEGORIA",
    "AÇÕES",
  ];

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.product);
  const filteredData = data.filter(
    (product) =>
      selectedCategory === "Todas categorias" ||
      product.category.name === selectedCategory
  );

  const handleDelete = (product_id: number) => {
    dispatch(removeProduct(product_id));
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
          {filteredData.length === 0 ? <NoFound /> : null}
          {filteredData.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{Number(product.price).toLocaleString()}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell className="flex flex-row gap-5">
                <span
                  className="cursor-pointer hover:bg-blue-50 rounded-sm p-1"
                  onClick={() => handleModify(product)}
                >
                  <Pencil className="size-4 text-blue-600" />
                </span>
                <span
                  className="cursor-pointer hover:bg-red-50 rounded-sm p-1"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 className="size-4 text-red-600" />
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
