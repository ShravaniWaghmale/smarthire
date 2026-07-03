import { Bell, Search } from "lucide-react";

export default function TopBar() {
  return (
    <header>

      <div className="flex h-[72px] items-center justify-between rounded-3xl border border-white/10 bg-[#0F172A]/95 px-8 backdrop-blur-xl">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

            <Search
              size={19}
              className="text-gray-400"
            />

          </div>

          <input
            type="text"
            placeholder="Search applications..."
            className="text-white bg-transparent outline-none w-80 placeholder:text-gray-500"
          />

        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-500">

          <Bell
            size={18}
            className="text-gray-300"
          />

          <span className="absolute w-2 h-2 rounded-full right-2 top-2 bg-cyan-400" />

        </button>

      </div>

    </header>
  );
}