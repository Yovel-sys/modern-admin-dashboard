import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {useApp} from "../context/AppContext";

const data = [
  {name: "Jan", sales: 4000},
  {name: "Feb", sales: 3000},
  {name: "Mar", sales: 5000},
  {name: "Apr", sales: 4500},
  {name: "May", sales: 6000},
  {name: "Jun", sales: 5500},
];

function SalesChart() {
  const {appSettings, formatValue} = useApp();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Revenue Over Time
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{fill: "#9ca3af", fontSize: 12}}
            />
            <YAxis
              tickFormatter={(value) =>
                formatValue(value, appSettings.currency)
              }
              axisLine={false}
              tickLine={false}
              tick={{fill: "#9ca3af", fontSize: 10}}
            />
            <Tooltip
              formatter={(value) => [
                formatValue(value, appSettings.currency),
                "Revenue",
              ]}
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{r: 4, fill: "#2563eb"}}
              activeDot={{r: 6}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
