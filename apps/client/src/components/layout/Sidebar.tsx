import {
  LayoutDashboard,
  MessageSquare,
  CheckSquare,
  Sparkles,
} from "lucide-react"

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Messages",
    icon: MessageSquare,
  },
  {
    label: "Tasks",
    icon: CheckSquare,
  },
  {
    label: "AI Hub",
    icon: Sparkles,
  },
]

export const Sidebar = () => {
  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900/70 p-5 backdrop-blur-xl lg:block">
      <h1 className="text-3xl font-bold text-violet-400">
        CollabRift
      </h1>

      <nav className="mt-10 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="mt-12">
        <p className="mb-4 text-sm text-slate-400">
          Team Presence
        </p>

        <div className="space-y-4">
          {["Apurva", "Ninad", "Simran"].map((user) => (
            <div
              key={user}
              className="flex items-center gap-3"
            >
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <span>{user}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}