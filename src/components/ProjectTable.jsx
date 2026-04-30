import {useApp} from "../context/AppContext";

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

function ProjectTable() {
  const {appSettings, formatValue} = useApp();

  // נשנה את הנתונים למספרים נקיים כדי שנוכל לחשב אותם
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      client: "Acme Corp",
      status: "Completed",
      amount: 3500,
    },
    {
      id: 2,
      name: "Mobile App QA",
      client: "Global Tech",
      status: "In Progress",
      amount: 1200,
    },
    {
      id: 3,
      name: "SEO Optimization",
      client: "Local Shop",
      status: "Pending",
      amount: 850,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-50">
        <h3 className="text-lg font-bold text-gray-800">Recent Projects</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4">Project Name</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {project.name}
                </td>
                <td className="px-6 py-4 text-gray-600">{project.client}</td>
                <td className="px-6 py-4 text-gray-800">
                  {formatValue(project.amount, appSettings.currency)}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(project.status)}`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectTable;
