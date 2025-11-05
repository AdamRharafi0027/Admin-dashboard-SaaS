import { FunnelPlus, Search } from "lucide-react";
import PrimaryButton from "./ui/PrimaryButton";

const SearchComponent = ({placeholder}) => {
  return (
    <>
      <div className="flex justify-between">
        <PrimaryButton classname={"p-3 m-0!"}>
          Filter
          <FunnelPlus />
        </PrimaryButton>
        <div className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-lg w-[350px] focus-within:ring-2 focus-within:ring-blue-500 bg-slate-50">
          <Search className="text-slate-500" size={20} />
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none bg-transparent w-full text-slate-700 placeholder:text-slate-400"
            required
          />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
