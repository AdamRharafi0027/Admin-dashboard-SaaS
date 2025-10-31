import { CircleUserRound, Crown } from "lucide-react";

const BestCostomers = () => {
  return (
    <>
      <div className="card bg-[#F1F5F9] rounded-lg mr-10 px-10 py-6 w-200">
        <h1 className="text-3xl font-bold">Customers</h1>
        <p className="text-[#475569] mb-5">See All The Best Customers</p>
        <div className=" text-white flex flex-col gap-8 pb-10">
          <div className="bg-[#2563EB] shadow-2xl rounded-md flex justify-between items-center px-4 py-3 relative">
            <Crown className=" absolute -top-10 -left-8 -rotate-40" size={60} fill="#F59E0B" color="#F59E0B"  />
            <div className="flex items-center gap-3">
                <CircleUserRound size={50} />
                <h3 className="text-2xl">username</h3>
            </div>
            <span className="text-3xl font-bold">#1</span>
          </div>
          <div className="bg-[#5C8AEF] shadow-2xl rounded-md flex justify-between items-center px-4 py-3 scale-95">
            <div className="flex items-center gap-3">
                <CircleUserRound size={50} />
                <h3 className="text-2xl">username</h3>
            </div>
            <span className="text-3xl font-bold">#1</span>
          </div>
          <div className="bg-[#8DADF2] shadow-2xl rounded-md flex justify-between items-center px-4 py-3 scale-90">
            <div className="flex items-center gap-3">
                <CircleUserRound size={50} />
                <h3 className="text-2xl">username</h3>
            </div>
            <span className="text-3xl font-bold">#1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCostomers;
