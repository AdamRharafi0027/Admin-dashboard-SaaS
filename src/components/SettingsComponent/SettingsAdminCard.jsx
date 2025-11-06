import { Pencil } from "lucide-react";

const SettingsAdminCard = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-col gap-6 border border-slate-200">

      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-700">Admin Profile</h2>
        <button className="text-blue-600 hover:text-blue-800 transition">
          <Pencil size={22} />
        </button>
      </div>

      {/* Name */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">Full Name</p>
          <h3 className="text-lg font-medium text-slate-800">carlos jack</h3>
        </div>
        <button className="text-blue-600 hover:text-blue-800">
          <Pencil size={20} />
        </button>
      </div>

      {/* Email */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">Email Address</p>
          <h3 className="text-lg font-medium text-slate-800">admin@gmail.com</h3>
        </div>
        <button className="text-blue-600 hover:text-blue-800">
          <Pencil size={20} />
        </button>
      </div>

      {/* Password */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">Password</p>
          <h3 className="text-lg font-medium text-slate-800">********</h3>
        </div>
        <button className="text-blue-600 hover:text-blue-800">
          <Pencil size={20} />
        </button>
      </div>

      {/* Role */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">Role</p>
          <h3 className="text-lg font-medium text-gray-700 rounded-md py-1 px-2 bg-blue-400 uppercase">Admin</h3>
        </div>
      </div>

    </div>
  );
};

export default SettingsAdminCard;
