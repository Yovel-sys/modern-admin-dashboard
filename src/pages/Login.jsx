import {useState} from "react";
import {useApp} from "../context/AppContext";
import toast from "react-hot-toast";

function Login() {
  const [nameInput, setNameInput] = useState("");
  const {login} = useApp();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nameInput.trim().length < 2) {
      toast.error("Please enter a valid name");
      return;
    }
    login(nameInput);
    toast.success(`Welcome back, ${nameInput}!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-200">
            MD
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to MyDash
          </h1>
          <p className="text-gray-500 mt-2">
            Please enter your name to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-blue-600 font-medium bg-blue-50 py-2 px-4 rounded-full inline-block">
              ✨ Tailor-made for your business needs
            </p>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              This is a demonstration of a fully customizable system. Every
              feature can be adapted to match your specific workflow.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
