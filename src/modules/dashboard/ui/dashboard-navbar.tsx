import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Calendar, ChartLine, ChevronDown } from "lucide-react";

export const DashboardNavbar = () => {
  return (
    <div className="bg-white w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#EBEBEB] p-2 sm:p-0">
      <div className="p-2 sm:p-4 w-full sm:w-auto">
        <h1 className="text-black text-sm font-medium">Quick Commerce</h1>
      </div>
      <div className="p-1 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 w-full sm:w-auto">
        <div className="border border-[#D9D9D9] rounded-lg flex items-center justify-between py-2 px-3 h-[40px] w-full sm:gap-x-2 sm:w-[80px] shadow-xs">
          <ChartLine className="size-5" />
          <Switch className="h-[18px] w-[32px]" />
        </div>
        <Button
          variant={"outline"}
          className="w-full sm:max-w-[300px] h-[40px] flex items-center justify-between px-3 text-sm border border-[#D9D9D9]"
        >
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            <span className="hidden sm:inline">
              August 01, 024 - August 03, 024
            </span>
            <span className="sm:hidden">Aug 01 - Aug 03, 024</span>
          </div>
          <ChevronDown className="size-5" />
        </Button>
      </div>
    </div>
  );
};
