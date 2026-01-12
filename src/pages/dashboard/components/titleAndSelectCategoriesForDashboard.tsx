import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TitleAndSelectCategoriesForDashboard() {
  return (
    <section className="flex justify-between w-full items-start md:flex-row flex-col md:gap-auto gap-5">
      {/* Title and Description */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <p className="text-gray-600">
          Comprehensive overview of your product sales and revenue analytics
        </p>
      </div>

      {/* Categories */}
      <div className="md:w-auto w-full">
        <Select>
          <SelectTrigger className="w-full md:w-[270px] bg-gray-100 font-medium text-gray-700">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}

export default TitleAndSelectCategoriesForDashboard;
