import { DashboardBottomNavbar } from "@/modules/dashboard/ui/dashboard-bottom-navbar";
import { DashboardCityTable } from "@/modules/dashboard/ui/dashboard-city-table";
import { DashboardNavbar } from "@/modules/dashboard/ui/dashboard-navbar";
import { DashboardSalesMetrics } from "@/modules/dashboard/ui/dashboard-sales-metrics";
import { DashboardTable } from "@/modules/dashboard/ui/dashboard-table";

export default function Home() {
  return (
    <div className="px-4 py-2">
      <div className="border border-[#EBEBEB] bg-[#FAFAFA] rounded-lg mt-[12px]">
        <DashboardNavbar />
        <DashboardBottomNavbar />
        <DashboardSalesMetrics />
        <DashboardTable />
        <DashboardCityTable />
      </div>
    </div>
  );
}
