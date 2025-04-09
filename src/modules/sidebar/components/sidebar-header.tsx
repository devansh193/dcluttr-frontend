import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsLeft, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
export const SidebarHeader = () => {
  return (
    <div className="w-full flex items-center justify-center h-[80px]">
      <div className="w-[51px] px-1">
        <Image src={"/header.svg"} alt="header" height={100} width={100} />
      </div>
      <div className="w-[237px] hidden md:flex items-center justify-between px-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={"outline"}
              className="flex items-center justify-between w-[200px] rounded-lg border border-[#DFDFDF]"
            >
              <h1>Test_brand</h1>
              <ChevronsUpDown />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <h1>
          <ChevronsLeft className="size-4 text-[#147961]" />
        </h1>
      </div>
    </div>
  );
};
