import { DashboardBottomNavbar } from "@/modules/dashboard/ui/dashboard-bottom-navbar";
import { DashboardNavbar } from "@/modules/dashboard/ui/dashboard-navbar";
import { DashboardSalesMetrics } from "@/modules/dashboard/ui/dashboard-sales-metrics";

export default function Home() {
  return (
    <div className=" p-4">
      <div className="border border-[#EBEBEB] bg-[#FAFAFA] rounded-lg mt-[4px]">
        <DashboardNavbar />
        <DashboardBottomNavbar />
        <DashboardSalesMetrics />
      </div>
    </div>
  );
}
