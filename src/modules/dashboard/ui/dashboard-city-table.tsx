import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CityInventory } from "./city-inventory-table";

export const DashboardCityTable = () => {
  return (
    <div className="w-full flex flex-col p-4 mt-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">City level data</h1>
          <p className="text-sm text-[#4F4D55]">
            Analytics for all your Cities
          </p>
        </div>
        <div>
          <Button className="flex bg-[#047055] border border-[#D9D9D9]">
            <h1>Filters(1)</h1>
            <ChevronDown />
          </Button>
        </div>
      </div>
      <div>
        <CityInventory />
      </div>
    </div>
  );
};
