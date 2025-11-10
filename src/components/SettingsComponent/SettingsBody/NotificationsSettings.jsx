import { Bell, Mail, Package, AlertTriangle } from "lucide-react";

const NotificationSettings = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col gap-6">

      {/* Header */}
      <div className="pb-3 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
          <Bell className="text-blue-600" size={22} />
          Notification Settings
        </h2>
        <p className="text-sm text-slate-500">
          Choose how you want to receive alerts and updates.
        </p>
      </div>

      {/* Notification Items */}
      <div className="flex flex-col gap-5">

        {/* Email Alerts */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Mail className="text-slate-600" size={20} />
            <div>
              <h3 className="text-slate-700 font-medium">Email Alerts</h3>
              <p className="text-sm text-slate-500">
                Receive important updates through email.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-6 transition"></div>
          </label>
        </div>

        {/* Order Updates */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Package className="text-slate-600" size={20} />
            <div>
              <h3 className="text-slate-700 font-medium">Order Updates</h3>
              <p className="text-sm text-slate-500">
                Get notified when a new order is placed or updated.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-6 transition"></div>
          </label>
        </div>

        {/* Low Stock Alerts */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-slate-600" size={20} />
            <div>
              <h3 className="text-slate-700 font-medium">Low Stock Alerts</h3>
              <p className="text-sm text-slate-500">
                Receive notifications when product stock is low.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-6 transition"></div>
          </label>
        </div>

      </div>
    </div>
  );
};

export default NotificationSettings;
