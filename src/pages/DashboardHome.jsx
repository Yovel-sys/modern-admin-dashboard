import SalesChart from "../components/SalesChart";
import ProjectTable from "../components/ProjectTable";
import {useApp} from "../context/AppContext";
import StatsCard from "../components/StatsCard";

function DashboardHome() {
  const {projects, formatValue, appSettings} = useApp();

  // חישובים בזמן אמת
  const totalRevenue = projects.reduce((sum, p) => sum + p.budget, 0);
  const activeProjects = projects.filter((p) => p.status === "Active").length;
  const avgProgress =
    projects.length > 0
      ? Math.round(
          projects.reduce((sum, p) => sum + p.progress, 0) / projects.length,
        )
      : 0;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Portfolio Value"
          value={formatValue(totalRevenue, appSettings.currency)}
          trend="+12%" // אפשר בהמשך לחשב גם מגמה
          trendUp={true}
        />
        <StatsCard
          title="Active Projects"
          value={activeProjects.toString()}
          trend="Currently running"
          trendUp={true}
        />
        <StatsCard
          title="Average Progress"
          value={`${avgProgress}%`}
          trend="Overall completion"
          trendUp={avgProgress > 50}
        />
      </div>
      <SalesChart />
      <ProjectTable />
    </div>
  );
}

export default DashboardHome;
