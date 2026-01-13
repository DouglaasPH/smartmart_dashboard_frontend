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
import type { RootState } from "@/store/store";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchAndFilterForProduct({
  selectedCategory,
  setSelectedCategory,
  setInputSearch,
}: Props) {
  const allCategories = useSelector((state: RootState) => state.category);

  return (
    <Card className="w-full p-4 gap-2">
      <div className="flex gap-5 md:flex-row flex-col w-full">
        <InputGroup>
          <InputGroupInput
            placeholder="Pesquise produtos por marca, nome, descrição ou preço"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
        >
          <SelectTrigger className="w-full md:w-[270px] bg-gray-100 font-medium text-gray-700">
            <SelectValue placeholder={selectedCategory} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todas categorias">Todas categorias</SelectItem>
            {allCategories.map((category) => (
              <SelectItem value={category.name}>{category.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}

export default SearchAndFilterForProduct;
