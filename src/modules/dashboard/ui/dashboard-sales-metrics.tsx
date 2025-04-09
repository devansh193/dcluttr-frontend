import SalesCard from "@/components/sales-card";
import React from "react";
import CityRevenueChart from "./city-revenue-chart";
export const DashboardSalesMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-2 p-4">
      <SalesCard title="Sales (MRP)" />
      <SalesCard title="Total Quantity Sold" />
      <CityRevenueChart />
    </div>
  );
};
