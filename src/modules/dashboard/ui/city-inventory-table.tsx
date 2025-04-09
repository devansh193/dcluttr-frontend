"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUp, ArrowDown, BarChart2, ChevronDown } from "lucide-react";

const inventoryData = [
  {
    id: 1,
    name: "New Delhi",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "3.2",
    estTraffic: "12,303",
    estImpressions: "25,005",
    ci: "1.9",
    checked: true,
    hasSubRow: true,
  },
  {
    id: 2,
    name: "",
    sales: "₹8,526.32",
    outOfStock: "6.79%",
    totalInventory: "679",
    avgRank: "7",
    estTraffic: "3005",
    estImpressions: "4231",
    ci: "1",
    isSubRow: true,
    parentId: 1,
  },
  {
    id: 3,
    name: "Bengaluru",
    sales: "₹7,012.72",
    outOfStock: "3.28%",
    totalInventory: "328",
    avgRank: "4",
    estTraffic: "2960",
    estImpressions: "3657",
    ci: "4",
    checked: true,
    hasSubRow: true,
  },
  {
    id: 4,
    name: "",
    sales: { value: "2.4%", trend: "up" },
    outOfStock: { value: "2.4%", trend: "up" },
    totalInventory: "-",
    avgRank: { value: "2.4%", trend: "up" },
    estTraffic: { value: "2.4%", trend: "up" },
    estImpressions: { value: "2.4%", trend: "up" },
    ci: { value: "4", trend: "down" },
    isSubRow: true,
    parentId: 3,
  },
  {
    id: 5,
    name: "SKU 3",
    sales: "₹9313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "11",
    estTraffic: "1931.9",
    estImpressions: "₹931.9",
    ci: "1.9",
    checked: false,
  },
  {
    id: 6,
    name: "SKU 4",
    sales: "₹0",
    outOfStock: "0",
    totalInventory: "0",
    avgRank: "0",
    estTraffic: "₹0",
    estImpressions: "₹0",
    ci: "0.0",
    checked: false,
  },
];

export const CityInventory = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>(() => {
    return inventoryData.filter((item) => item.checked).map((item) => item.id);
  });

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((rowId) => rowId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isRowSelected = (id: number) => selectedRows.includes(id);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderTrend = (data: any) => {
    if (typeof data === "object" && data.trend) {
      const isUp = data.trend === "up";
      return (
        <div
          className={`flex items-center ${
            isUp ? "text-green-600" : "text-red-600"
          }`}
        >
          {isUp ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ArrowDown className="h-4 w-4" />
          )}
          <span>{data.value}</span>
        </div>
      );
    }
    return data;
  };

  return (
    <div className="w-full overflow-auto border border-[#F1F1F1] rounded-xl bg-white mt-4 shadow-sm">
      <div className="md:hidden p-4 space-y-4">
        {inventoryData
          .filter((row) => !row.isSubRow)
          .map((row) => (
            <div key={row.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={isRowSelected(row.id)}
                    onCheckedChange={() => toggleRowSelection(row.id)}
                    id={`mobile-row-${row.id}`}
                  />
                  <span className="font-medium">{row.name}</span>
                </div>
                <span className="text-sm text-gray-500">ID: {row.id}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Sales</p>
                  <p>{renderTrend(row.sales)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Out of Stock</p>
                  <p>{renderTrend(row.outOfStock)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Inventory</p>
                  <p>{renderTrend(row.totalInventory)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Avg Rank</p>
                  <p>{renderTrend(row.avgRank)}</p>
                </div>
              </div>
              {inventoryData
                .filter((subRow) => subRow.parentId === row.id)
                .map((subRow) => (
                  <div key={subRow.id} className="mt-3 pt-3 border-t pl-8">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Sub-item Sales</p>
                        <p>{renderTrend(subRow.sales)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Out of Stock</p>
                        <p>{renderTrend(subRow.outOfStock)}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        <div className="border rounded-lg p-4 bg-gray-50">
          <h3 className="font-medium mb-3">Total</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Total Sales</p>
              <p>₹2,93,132.12</p>
            </div>
            <div>
              <p className="text-gray-500">Out of Stock</p>
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="w-[200px] py-4 font-medium">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5" />
                  <span>SKU Name</span>
                </div>
              </TableHead>
              <TableHead
                colSpan={3}
                className="text-center border-x py-4 font-medium"
              >
                Availability
              </TableHead>
              <TableHead colSpan={4} className="text-center py-4 font-medium">
                Visibility
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="border-r"></TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Sales</span>
                  <ChevronDown />
                </div>
              </TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Out of Stock</span>
                </div>
              </TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Total Inventory</span>
                  <ChevronDown />
                </div>
              </TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Average Rank</span>
                  <ChevronDown />
                </div>
              </TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Est. Traffic</span>
                  <ChevronDown />
                </div>
              </TableHead>
              <TableHead className="border-r py-3">
                <div className="flex items-center justify-between">
                  <span>Est. Impressions</span>
                  <ChevronDown />
                </div>
              </TableHead>
              <TableHead className="py-3">
                <span>CI</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((row) => (
              <TableRow
                key={row.id}
                className={`border-b ${
                  isRowSelected(row.id) && !row.isSubRow ? "bg-gray-100" : ""
                } ${row.isSubRow ? "" : "hover:bg-gray-50"}`}
              >
                <TableCell className="border-r py-4">
                  {!row.isSubRow ? (
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={isRowSelected(row.id)}
                        onCheckedChange={() => toggleRowSelection(row.id)}
                        id={`row-${row.id}`}
                      />
                      {row.name && (
                        <a href="#" className="underline font-medium">
                          {row.name}
                        </a>
                      )}
                    </div>
                  ) : null}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.sales)}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.outOfStock)}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.totalInventory)}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.avgRank)}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.estTraffic)}
                </TableCell>
                <TableCell className="border-r py-4">
                  {renderTrend(row.estImpressions)}
                </TableCell>
                <TableCell className="py-4">{renderTrend(row.ci)}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-gray-50">
              <TableCell className="border-r py-4 font-medium">Total</TableCell>
              <TableCell className="border-r py-4 font-medium">
                ₹2,93,132.12
              </TableCell>
              <TableCell className="border-r py-4 font-medium">16%</TableCell>
              <TableCell className="border-r py-4 font-medium">2931</TableCell>
              <TableCell className="border-r py-4 font-medium">8.3</TableCell>
              <TableCell className="border-r py-4 font-medium">
                61,985
              </TableCell>
              <TableCell className="border-r py-4 font-medium">
                2,61,768
              </TableCell>
              <TableCell className="py-4 font-medium">1.9</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
