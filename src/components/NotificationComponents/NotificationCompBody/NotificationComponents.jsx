import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react";

const NotificationComponents = () => {
const notifications = [
  {
    id: 1,
    type: "success",
    message: "Your order #1023 has been delivered successfully.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Low stock alert: Hoodie X is running out!",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "info",
    message: "New feature available: You can now export reports as PDF.",
    time: "1 day ago",
  },
];

 const renderIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle className="text-green-600" />;
    case "warning":
      return <AlertCircle className="text-yellow-500" />;
    case "info":
      return <Info className="text-blue-600" />;
    default:
      return <Info className="text-blue-600" />;
  }
};

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md border border-slate-200">

      {/* Header */}
      <div className="pb-3 border-b border-slate-200 mb-4 flex items-center gap-2">
        <Bell className="text-blue-600" size={22} />
        <h2 className="text-xl font-semibold text-slate-700">
          Notifications
        </h2>
      </div>

      {/* If no notifications */}
      {notifications.length === 0 && (
        <div className="w-full py-10 flex flex-col justify-center items-center text-center">
          <Bell className="text-slate-400 mb-3" size={40} />
          <h3 className="text-slate-600 text-lg font-medium">
            No notifications yet
          </h3>
          <p className="text-slate-500 text-sm">
            You're all caught up. Check back later.
          </p>
        </div>
      )}

      {/* Notification List */}
      {notifications.length > 0 && (
        <div className="flex flex-col gap-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200"
            >
              {/* Icon */}
              <div>{renderIcon(notif.type)}</div>

              {/* Message */}
              <div className="flex flex-col">
                <p className="text-slate-700 font-medium">{notif.message}</p>
                <span className="text-sm text-slate-500">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default NotificationComponents;
