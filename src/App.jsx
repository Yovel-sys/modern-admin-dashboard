import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    // changed dir to ltr and text-left
    <div className="flex h-screen bg-gray-100 font-sans text-left" dir="ltr">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Header title="Overview" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            Example Card
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
