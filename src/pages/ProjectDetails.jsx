import {useParams, Link} from "react-router-dom";
import {useApp} from "../context/AppContext";

// נתונים מדומים (במציאות זה יגיע מ-Database או מה-State הגלובלי)
const projectsData = [
  {
    id: 1,
    name: "E-commerce App",
    client: "Fashion Store",
    progress: 75,
    status: "Active",
    budget: 12000,
    description:
      "Building a full-stack e-commerce platform with React and Node.js.",
  },
  {
    id: 2,
    name: "Cybersecurity Audit",
    client: "Bank Secure",
    progress: 100,
    status: "Completed",
    budget: 8500,
    description: "Full security assessment of the core banking system.",
  },
];

function ProjectDetails() {
  const {id} = useParams();
  const {formatValue, appSettings} = useApp();

  // מוצאים את הפרויקט המתאים לפי ה-ID
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-8 text-center">
        Project not found.{" "}
        <Link to="/projects" className="text-blue-600">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      <Link
        to="/projects"
        className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1"
      >
        ← Back to Projects
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{project.name}</h2>
            <p className="text-gray-500 text-lg">{project.client}</p>
          </div>
          <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
            {project.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500">Budget</p>
            <p className="text-xl font-bold">
              {formatValue(project.budget, appSettings.currency)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl col-span-2">
            <p className="text-sm text-gray-500">Progress</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{width: `${project.progress}%`}}
                ></div>
              </div>
              <span className="font-bold">{project.progress}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Description</h3>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
