import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function ApplicationDetails() {
  return (
    <DashboardLayout>
      <div className="flex min-h-[70vh] items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.03]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Application Details
          </h1>

          <p className="mt-4 text-gray-400">
            This page will display complete information
            about a selected application.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}