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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white shadow-lg relative overflow-hidden">
        {/* קישוט ויזואלי ברקע */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Built to your specifications
          </h1>
          <p className="text-blue-100 text-lg max-w-xl">
            This dashboard is just a starting point. Every chart, button, and
            logic can be custom-built to solve your unique challenges.
          </p>
        </div>
      </div>
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
