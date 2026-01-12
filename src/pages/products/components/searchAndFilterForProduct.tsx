import { Card } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

function SearchAndFilterForProduct() {
  return (
    <Card className="w-full p-4 gap-2">
      <div className="flex gap-5 md:flex-row flex-col w-full">
        <InputGroup>
          <InputGroupInput placeholder="Pesquise produtos por nome ou categoria" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
        <Select>
          <SelectTrigger className="w-full md:w-[270px] bg-gray-100 font-medium text-gray-700">
            <SelectValue placeholder="Todas categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <span className="text-sm text-gray-500">
        Mostrando 1-10 de 12 produtos
      </span>
    </Card>
  );
}

export default SearchAndFilterForProduct;
