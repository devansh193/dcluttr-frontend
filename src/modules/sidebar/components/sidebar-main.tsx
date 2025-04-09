import { cn } from "@/lib/utils";
import {
  HomeIcon,
  PresentationIcon,
  ChevronDown,
  HelpCircle,
  Settings,
} from "lucide-react";

const items = [
  {
    label: "Overview",
    icon: HomeIcon,
  },
  {
    label: "Channels",
    icon: PresentationIcon,
    content: [
      { label: "Meta Ads" },
      { label: "Google Ads" },
      { label: "Quick Commerce" },
    ],
  },
  {
    label: "Creatives",
    icon: PresentationIcon,
  },
];

const bottomItems = [
  {
    label: "Help",
    icon: HelpCircle,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export const SidebarMain = () => {
  return (
    <div className="h-full flex flex-col justify-between w-[237px] bg-[#F8F8F8] p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center gap-3 text-sm text-[#031B15] hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
              <item.icon className="size-4 text-[#7E8886]" />
              <span>{item.label}</span>
              {item.content && (
                <ChevronDown className="size-4 ml-auto text-gray-400" />
              )}
            </div>
            {item.content && (
              <div className="ml-8 mt-1 text-sm text-gray-600 space-y-2">
                {item.content.map((sub) => (
                  <div
                    key={sub.label}
                    className={cn(
                      `hover:text-black cursor-pointer transition px-2 py-1 rounded-lg ${
                        sub.label === "Quick Commerce" &&
                        "bg-[#DFE9E8] text-[#047055]"
                      }`
                    )}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-500 px-3">
        {bottomItems.map((item) => (
          <div key={item.label}>
            <div className="flex items-center gap-3 text-sm text-[#031B15] hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
              <item.icon className="size-4 text-[#7E8886]" />
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
