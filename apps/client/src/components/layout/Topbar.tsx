import { Bell, Search } from "lucide-react"

export const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3">
        <Search size={18} />

        <input
          placeholder="Search workspace..."
          className="bg-transparent outline-none"
        />
      </div>

      <button className="rounded-2xl border border-slate-700 bg-slate-900 p-3">
        <Bell size={18} />
      </button>
    </header>
  )
}