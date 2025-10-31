
import SideBarItems from "./SideBarItems";
import PrimaryButton from "../ui/PrimaryButton";
import { LogOut } from "lucide-react";
import SideBarHeader from "./SideBarHeader";

const SideBar = () => {
  return (
    <>
      <main className="h-screen bg-[#1E293B] w-100 text-white py-6 overflow-hidden sticky top-0">
        <SideBarHeader />
        <SideBarItems />
        <PrimaryButton classname={"px-10 py-3"}>
          <LogOut />
          LogOut
        </PrimaryButton>
      </main>
    </>
  );
};

export default SideBar;
