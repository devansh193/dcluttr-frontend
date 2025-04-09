import { DashboardSidebar } from "@/modules/sidebar/ui/dashboard-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="fixed left-0 top-0 h-screen w-[51px] lg:w-[288px] bg-white z-10">
        <DashboardSidebar />
      </div>
      <main className="ml-[51px] md:ml-[288px] h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};
