import { SidebarCollapsible } from "../components/sidebar-collapsible";
import { SidebarHeader } from "../components/sidebar-header";
import { SidebarMain } from "../components/sidebar-main";

export const DashboardSidebar = () => {
  return (
    <div className="flex flex-col w-[51px] md:w-[288px] h-screen">
      <div>
        <SidebarHeader />
      </div>
      <div className="flex h-full">
        <SidebarCollapsible />
        <div className="hidden md:block">
          <SidebarMain />
        </div>
      </div>
    </div>
  );
};
