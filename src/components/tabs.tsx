"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TabOption = {
  id: string;
  label: string;
  image: string;
};

interface TripleToggleTabProps {
  options: TabOption[];
  defaultActiveId?: string;
  className?: string;
}

const TripleToggleTab = ({
  options,
  defaultActiveId,
  className,
}: TripleToggleTabProps) => {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || (options.length > 0 ? options[0].id : "")
  );

  if (options.length === 0) {
    return null;
  }

  const tabOptions = options.slice(0, 3);
  while (tabOptions.length < 3) {
    tabOptions.push({
      id: `empty-${tabOptions.length}`,
      label: "",
      image: "",
    });
  }

  return (
    <div className={cn("w-[320px]", className)}>
      <div className="relative py-1 px-1 rounded-lg flex border border-[#E6E8E8]">
        {tabOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveId(option.id)}
            className={cn(
              "flex-1 py-1 text-sm font-medium relative z-10 flex items-center justify-center gap-x-1 transition-all duration-200 ease-in-out rounded-md",
              activeId === option.id
                ? "text-[#047055] bg-[#DFEAE8]"
                : "text-gray-700 hover:text-gray-900 opacity-30"
            )}
            disabled={activeId === option.id}
          >
            <Image
              src={option.image}
              alt={option.label}
              width={20}
              height={20}
            />
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TripleToggleTab;
