import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-h-screen overflow-y-auto">
          <div className="px-10 py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}