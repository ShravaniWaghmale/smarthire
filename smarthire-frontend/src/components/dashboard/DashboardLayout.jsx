import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* Background Blur */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-10">

        <TopNavbar />

        <main className="mx-auto max-w-[1450px] px-8 pt-16 pb-24 lg:px-12 xl:px-16">

          <div className="space-y-16">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}