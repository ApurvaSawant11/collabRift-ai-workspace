import { Bell, Menu } from "lucide-react";

import { Input } from "@/components/ui/Input";

export const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-4 py-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-slate-700 bg-slate-900 p-2 lg:hidden">
          <Menu size={18} />
        </button>

        <div className="hidden w-[320px] lg:block">
          <Input placeholder="Search workspace..." className="h-11" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-2xl border border-slate-700 bg-slate-900 p-3">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2">
          <div className="h-9 w-9 rounded-full bg-violet-500" />

          <div className="hidden lg:block">
            <p className="text-sm font-medium">Apurva</p>

            <p className="text-xs text-slate-400">Fullstack Engineer</p>
          </div>
        </div>
      </div>
    </header>
  );
};
