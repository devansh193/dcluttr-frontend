import TripleToggleTab from "@/components/tabs";

const tabOptions = [
  {
    id: "tab1",
    label: "Blinkit",
    image: "/blinkit.svg",
  },
  {
    id: "tab2",
    label: "Zepto",
    image: "/zepto.svg",
  },
  {
    id: "tab3",
    label: "Instamart",
    image: "/instamart.svg",
  },
];
export const DashboardBottomNavbar = () => {
  return (
    <div className="bg-white w-full flex items-start justify-start  border-b border-[#EBEBEB]">
      <div className="p-2">
        <TripleToggleTab options={tabOptions} />
      </div>
    </div>
  );
};
