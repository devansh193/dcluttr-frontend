import { DashboardLayout } from "@/modules/dashboard/layout/dashboard-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};
export default Layout;
