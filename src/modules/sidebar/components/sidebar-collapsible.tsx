import { UserIcon } from "@/components/assets/icon/user";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

const items = [
  {
    label: "Mama_earth",
    icon: "./earth.svg",
  },
  {
    label: "Boat",
    icon: "./boat.svg",
  },
];

export const SidebarCollapsible = () => {
  return (
    <div className="h-full flex flex-col items-center justify-between w-[51px] px-1">
      <div className=" space-y-2">
        {items.map((item) => (
          <div key={item.label}>
            <Image
              src={item.icon}
              alt={item.label}
              width={100}
              height={100}
              className="rounded-xl"
            />
          </div>
        ))}
        <div>
          <h1 className="flex items-center justify-center p-3 border border-[#B4BBB9] rounded-xl">
            <PlusIcon className="text-[#1D874F] size-4" />
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 space-y-2">
        <div>
          <UserIcon />
        </div>
        <div>
          <h1 className="size-8 flex items-center justify-center rounded-full bg-[#9105FF] text-white text-sm">
            SS
          </h1>
        </div>
      </div>
    </div>
  );
};
