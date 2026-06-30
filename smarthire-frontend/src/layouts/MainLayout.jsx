export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {children}
    </div>
  );
}