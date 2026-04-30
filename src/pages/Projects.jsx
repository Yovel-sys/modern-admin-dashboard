import {useState} from "react";
import {Link} from "react-router-dom";
import {useApp} from "../context/AppContext";
import AddProjectModal from "../components/AddProjectModal";
import toast from "react-hot-toast";

function Projects() {
  const {formatValue, appSettings} = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-commerce App",
      client: "Fashion Store",
      progress: 75,
      status: "Active",
      budget: 12000,
    },
    {
      id: 2,
      name: "Cybersecurity Audit",
      client: "Bank Secure",
      progress: 100,
      status: "Completed",
      budget: 8500,
    },
  ]);

  const handleAddProject = (newProj) => {
    setProjects([{id: Date.now(), ...newProj}, ...projects]);
    toast.success("Project created!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Projects List</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            {/* ... אותו מבנה כרטיס שכתבנו קודם ... */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span className="font-bold">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{width: `${project.progress}%`}}
                ></div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
              <span className="font-bold text-gray-800">
                {formatValue(project.budget, appSettings.currency)}
              </span>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProject}
      />
    </div>
  );
}

export default Projects;
