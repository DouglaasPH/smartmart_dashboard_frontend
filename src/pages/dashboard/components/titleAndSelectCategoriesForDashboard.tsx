import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

function TitleAndSelectCategoriesForDashboard({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const allCategories = useSelector((state: RootState) => state.category);
  return (
    <section className="flex justify-between w-full items-start md:flex-row flex-col md:gap-auto gap-5">
      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <p className="text-gray-600">
          Visão geral completa das suas análises de vendas e receitas de
          produtos baseado por categoria de produtos.
        </p>
      </div>

      {/* Categories */}
      <div className="md:w-auto w-full">
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
    </section>
  );
}

export default TitleAndSelectCategoriesForDashboard;
