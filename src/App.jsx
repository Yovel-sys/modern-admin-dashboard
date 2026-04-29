import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import SalesChart from "./components/SalesChart";
import ProjectTable from "./components/ProjectTable";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-left" dir="ltr">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header title="Overview" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Revenue"
            value="$45,231"
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

        {/* הגרף החדש שלנו */}
        <SalesChart />
        <ProjectTable />
      </main>
    </div>
  );
}

export default App;
