"use client";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUp, CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

const sampleData = [
  { day: "09", thisMonth: 1.4, lastMonth: 2.3 },
  { day: "10", thisMonth: 2.6, lastMonth: 2.0 },
  { day: "11", thisMonth: 3.6, lastMonth: 3.2 },
  { day: "12", thisMonth: 4.8, lastMonth: 3.3 },
  { day: "13", thisMonth: 3.0, lastMonth: 4.2 },
  { day: "14", thisMonth: 3.8, lastMonth: 2.5 },
  { day: "15", thisMonth: 5.8, lastMonth: 3.5 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-md border border-gray-200 text-xs">
        <p className="text-sales-green font-medium">
          This Month: {payload[0].value.toFixed(1)}
        </p>
        <p className="text-sales-red font-medium">
          Last Month: {payload[1].value.toFixed(1)}
        </p>
      </div>
    );
  }
  return null;
};

interface SalesCardProps {
  className?: string;
  title: string;
}

const SalesCard = ({ className, title }: SalesCardProps) => {
  const [showHelp, setShowHelp] = useState(false);

  const currentValue = 125.49;
  const previousValue = 119.69;
  const percentageChange = 2.4;

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100",
        className
      )}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <h2 className="text-sm font-medium text-gray-700">{title}</h2>
        <button
          onClick={() => setShowHelp(!showHelp)}
          className="text-gray-500 hover:text-gray-700"
        >
          <CircleHelp className="w-5 h-5" />
        </button>
      </div>

      <div className="">
        <div className="flex justify-between items-start mb-2 p-4">
          <div>
            <h3 className="text-xl font-bold">{currentValue}</h3>
            <p className="text-gray-500 text-xs">
              vs {previousValue} last month
            </p>
          </div>
          <div className="flex items-center text-sales-green">
            <ArrowUp />
            <span className="font-medium ml-1">{percentageChange}%</span>
          </div>
        </div>
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={sampleData}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2e844a" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#2e844a" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickCount={4}
                tickMargin={10}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                domain={[1.5, 6]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="lastMonth"
                stroke="#d46e6a"
                strokeWidth={2}
                dot={false}
                fill="none"
                strokeDasharray="4 4"
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                stroke="#2e844a"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorThisMonth)"
                dot={{ r: 0 }}
                activeDot={{
                  r: 5,
                  fill: "#2e844a",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex space-x-6 mt-2 border-t">
          <div className="flex items-center py-2 px-4">
            <div className="size-2 rounded-full bg-[#1D874F] mr-2"></div>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="flex items-center">
            <div className="size-2 rounded-full bg-[#E25D33] mr-2"></div>
            <span className="text-sm text-gray-500">Last Month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
