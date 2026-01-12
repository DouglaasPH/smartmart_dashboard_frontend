// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// lucide-react
import {
  FileSpreadsheet,
  LayoutDashboard,
  Package,
  TextAlignJustify,
  X,
} from "lucide-react";

// shadcn/ui
import { Button } from "../ui/button";

function Navbar() {
  const navigate = useNavigate();
  const [currentButton, setCurrentButton] = useState("Dashboard");
  const [isActiveMenuBar, setIsActiveMenuBar] = useState(false);

  const click = (button: string) => {
    setCurrentButton(button);
    if (button == "Dashboard") navigate("/");
    else if (button == "Products") navigate("/products");
    else if (button == "CSV Management") navigate("/csv-management");
  };

  return (
    <nav className="border-b-1 sticky z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo container */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              SmartMart Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            {/* Buttons container */}
            <div className="flex gap-5">
              <Button
                className={`cursor-pointer h-8 gap-2 text-sm font-medium ${
                  currentButton == "Dashboard"
                    ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                    : "bg-transparent hover:bg-gray-100 text-gray-600"
                }`}
                onClick={() => click("Dashboard")}
              >
                <LayoutDashboard className="size-3.5" />
                <span>Dashboard</span>
              </Button>
              <Button
                className={`cursor-pointer h-8 gap-2 text-sm font-medium ${
                  currentButton == "Products"
                    ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                    : "bg-transparent hover:bg-gray-100 text-gray-600"
                }`}
                onClick={() => click("Products")}
              >
                <Package />
                <span>Products</span>
              </Button>
              <Button
                className={`cursor-pointer h-8 gap-2 text-sm font-medium ${
                  currentButton == "CSV Management"
                    ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                    : "bg-transparent hover:bg-gray-100 text-gray-600"
                }`}
                onClick={() => click("CSV Management")}
              >
                <FileSpreadsheet />
                <span>CSV Management</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="block md:hidden">
            <Button
              className="bg-transparent text-black"
              onClick={() => setIsActiveMenuBar(!isActiveMenuBar)}
            >
              {isActiveMenuBar ? (
                <X className="size-6" />
              ) : (
                <TextAlignJustify className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`block md:hidden ${isActiveMenuBar ? "block" : "hidden"}`}
      >
        {/* Buttons container */}
        <div className="flex flex-col border-t-1 p-2">
          <Button
            className={`cursor-pointer justify-start h-10 gap-2 text-sm font-medium ${
              currentButton == "Dashboard"
                ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                : "bg-transparent hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => click("Dashboard")}
          >
            <LayoutDashboard className="size-3.5" />
            <span>Dashboard</span>
          </Button>
          <Button
            className={`cursor-pointer justify-start h-10 gap-2 text-sm font-medium ${
              currentButton == "Products"
                ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                : "bg-transparent hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => click("Products")}
          >
            <Package />
            <span>Products</span>
          </Button>
          <Button
            className={`cursor-pointer justify-start h-10 gap-2 text-sm font-medium ${
              currentButton == "CSV Management"
                ? "bg-blue-50 hover:bg-gray-100 text-blue-500"
                : "bg-transparent hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => click("CSV Management")}
          >
            <FileSpreadsheet />
            <span>CSV Management</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
