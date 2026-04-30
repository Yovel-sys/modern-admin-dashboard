import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";
import ProjectTable from "../components/ProjectTable";
import {useApp} from "../context/AppContext";

export default function DashboardHome() {
  const {appSettings} = useApp();

  // לוגיקה פשוטה להצגת המטבע הנכון
  const currencySymbol =
    appSettings.currency === "ILS"
      ? "₪"
      : appSettings.currency === "EUR"
        ? "€"
        : "$";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* עכשיו הערך דינמי לפי המטבע שנבחר! */}
        <StatsCard
          title="Total Revenue"
          value={`${currencySymbol}45,231`}
          trend="12.5%"
          trendUp={true}
        />
        <StatsCard
          title="Active Projects"
          value="12"
          trend="2"
          trendUp={true}
        />
        <StatsCard
          title="Hours Tracked"
          value="164h"
          trend="4.3%"
          trendUp={false}
        />
      </div>
      <SalesChart />
      <ProjectTable />
    </>
  );
}
