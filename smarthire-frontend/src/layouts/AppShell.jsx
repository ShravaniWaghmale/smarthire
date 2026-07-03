import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main */}

        <main className="flex flex-col flex-1">

          <div className="px-8 pt-8 pb-8">

            <TopBar />

            <div className="mt-10">

              {children}

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}