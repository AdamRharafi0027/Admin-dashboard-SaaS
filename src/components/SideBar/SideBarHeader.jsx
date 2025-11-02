import { CircleUserRound } from "lucide-react";

const SideBarHeader = () => {
  return (
    <>
      <header>
        <h1 className="pb-5 text-center text-4xl font-bold">E-COMMERCE</h1>
        <div className="border"></div>
        <div className="admin-data p-4 flex items-center gap-4">
          <CircleUserRound size={60} color="#BFD8FF" />
          <div className="info">
            <h3 className="text-2xl font-bold text-[#BFD8FF]">Admin AD</h3>
            <div className="flex gap-2">
              <div className="admin-status ">
                {/* Styles -> index.css */}
                <div className="status relative"></div>
                <h4 className="ml-6 text-md">Online</h4>
              </div>
              <div className="role">
                <button className="bg-[#BFD8FF] text-[#475569] font-bold rounded-sm  px-2">ADMIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border"></div>
      </header>
    </>
  );
};

export default SideBarHeader;
