"use client";
import React from "react";
import { ArrowUp, ArrowDown, CircleHelp } from "lucide-react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface CityData {
  name: string;
  value: number;
  formattedValue: string;
  percentage: string;
  growth: number;
  formattedGrowth: string;
  color: string;
}
const cityData: CityData[] = [
  {
    name: "New Delhi",
    value: 26.5,
    formattedValue: "₹26.5L",
    percentage: "35%",
    growth: 1.2,
    formattedGrowth: "1.2%",
    color: "#6D4FED",
  },
  {
    name: "Mumbai",
    value: 36.4,
    formattedValue: "₹36.4L",
    percentage: "23%",
    growth: -3.3,
    formattedGrowth: "3.3%",
    color: "#EA6153",
  },
  {
    name: "West Bengal",
    value: 12.2,
    formattedValue: "₹12.2L",
    percentage: "21%",
    growth: -2.3,
    formattedGrowth: "2.3%",
    color: "#F7C245",
  },
  {
    name: "Others",
    value: 24.3,
    formattedValue: "₹24.3L",
    percentage: "9%",
    growth: 1.09,
    formattedGrowth: "1.09%",
    color: "#D9D9D9",
  },
];
interface CityRevenueChartProps {
  className?: string;
}
const CityRevenueChart = ({ className }: CityRevenueChartProps) => {
  const totalValue = "₹68.2L";
  const totalGrowth = 2.2;

  const chartData = cityData.map((city) => ({
    name: city.name,
    value: city.value,
    color: city.color,
  }));

  const renderGrowthIndicator = (growth: number, formattedGrowth: string) => {
    if (growth > 0) {
      return (
        <div className="flex items-center text-green-600">
          <ArrowUp size={16} className="mr-1" /> {formattedGrowth}
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-red-600">
          <ArrowDown size={16} className="mr-1" /> {formattedGrowth}
        </div>
      );
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100",
        className
      )}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <h2 className="text-sm font-medium text-gray-700">Top</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <CircleHelp className="w-5 h-5" />
        </button>
      </div>

      <div className="relative">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={100}
                outerRadius={120}
                paddingAngle={1}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-6">
          <div className="text-gray-500 text-sm">Total</div>
          <div className="text-lg font-bold">{totalValue}</div>
          <div className="flex items-center justify-center text-green-600">
            <ArrowUp size={16} className="mr-1" /> {totalGrowth}%
          </div>
        </div>
      </div>
      <div className="px-2 space-y-1 mt-6">
        {cityData.map((city, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: city.color }}
              />
              <span className="text-gray-600 text-sm">{city.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-black font-semibold w-24 text-right">
                {city.formattedValue}
              </span>
              <span className="bg-gray-100 rounded-md py-1 w-16 text-center text-gray-500">
                {city.percentage}
              </span>
              <div className="w-20 text-right">
                {renderGrowthIndicator(city.growth, city.formattedGrowth)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityRevenueChart;
