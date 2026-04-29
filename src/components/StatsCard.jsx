function StatsCard({title, value, trend, trendUp}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {trendUp ? "↑" : "↓"} {trend}
        </span>
      </div>
    </div>
  );
}

export default StatsCard;
