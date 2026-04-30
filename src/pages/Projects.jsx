import {useState} from "react";
import {useApp} from "../context/AppContext";
import AddProjectModal from "../components/AddProjectModal";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {motion} from "framer-motion";

function Projects() {
  const {formatValue, appSettings} = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // הנתונים שלנו
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
    {
      id: 3,
      name: "Landing Page",
      client: "Startup X",
      progress: 30,
      status: "Review",
      budget: 2400,
    },
  ]);

  // --- לוגיקת חיפוש וסינון ---
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  // ---------------------------

  const handleAddProject = (newProj) => {
    setProjects([{id: Date.now(), ...newProj}, ...projects]);
    toast.success("Project created!");
  };

  return (
    <div className="space-y-6">
      {/* שורת חיפוש וסינון */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-1 gap-4 min-w-[300px]">
          <input
            type="text"
            placeholder="Search projects or clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Review">Review</option>
          </select>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          + New Project
        </button>
      </div>

      {/* רשת הפרויקטים (משתמשת ב-filteredProjects) */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: index * 0.05}} // כל כרטיס יופיע בעיכוב קל מהקודם
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500">{project.client}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Review"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500 font-medium">Progress</span>
                  <span className="font-bold text-blue-600">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="font-bold text-gray-800">
                  {formatValue(project.budget, appSettings.currency)}
                </span>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Details →
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 italic">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </motion.div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProject}
      />
    </div>
  );
}

export default Projects;
