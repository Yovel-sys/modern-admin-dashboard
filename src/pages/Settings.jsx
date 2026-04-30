import {useApp} from "../context/AppContext";
import toast from "react-hot-toast";

function Settings() {
  const {appSettings, updateSettings} = useApp();

  return (
    <div className="max-w-3xl space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Account Settings
        </h2>

        <div className="space-y-6">
          {/* הגדרת מטבע */}
          <div className="flex items-center justify-between py-4 border-b border-gray-50">
            <div>
              <h4 className="font-semibold text-gray-700">Display Currency</h4>
              <p className="text-sm text-gray-500">
                Choose how prices are shown across the dashboard.
              </p>
            </div>
            <select
              value={appSettings.currency}
              onChange={(e) => {
                updateSettings({currency: e.target.value});
                toast.success(`Currency changed to ${e.target.value}`);
              }}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="USD">USD ($)</option>
              <option value="ILS">ILS (₪)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          {/* התראות מייל - Toggle */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="font-semibold text-gray-700">
                Email Notifications
              </h4>
              <p className="text-sm text-gray-500">
                Receive weekly reports about your projects.
              </p>
            </div>
            <button
              onClick={() => {
                const newValue = !appSettings.emailNotifications;
                updateSettings({emailNotifications: newValue});
                toast(
                  newValue
                    ? "Notifications Enabled 🔔"
                    : "Notifications Disabled 🔕",
                );
              }}
              className={`w-12 h-6 rounded-full transition-colors relative ${appSettings.emailNotifications ? "bg-blue-600" : "bg-gray-300"}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${appSettings.emailNotifications ? "left-7" : "left-1"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
