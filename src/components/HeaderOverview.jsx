import PrimaryButton from "./ui/PrimaryButton";
import { Bell, Moon } from "lucide-react";

const HeaderOverview = ({ children }) => {
  return (
    <>
      <header className="mt-5 flex justify-between items-center ">
        <h1 className="font-bold text-4xl">{children}</h1>
        <div className=" flex items-center gap-10 -mt-12">
          <PrimaryButton classname={"px-4 py-2"}>
            <Moon size={40} />
          </PrimaryButton>
          <PrimaryButton classname={"px-4 py-2"}>
            <Bell size={40} />
            <div className="notification-counter absolute text-[20px] ">0</div>
          </PrimaryButton>
        </div>
      </header>
    </>
  );
};

export default HeaderOverview;
