import { DashboardBottomNavbar } from "@/modules/dashboard/ui/dashboard-bottom-navbar";
import { DashboardNavbar } from "@/modules/dashboard/ui/dashboard-navbar";

export default function Home() {
  return (
    <div className="h-full p-4">
      <div className="border border-[#EBEBEB] bg-[#FAFAFA] rounded-lg mt-[4px] h-full">
        <DashboardNavbar />
        <DashboardBottomNavbar />
      </div>
    </div>
  );
}
