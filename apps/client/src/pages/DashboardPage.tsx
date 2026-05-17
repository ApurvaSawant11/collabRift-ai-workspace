import { motion } from "framer-motion"

import { Sidebar } from "@/components/layout/Sidebar"
import { Topbar } from "@/components/layout/Topbar"
import { GlassCard } from "@/components/ui/GlassCard"

export const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={item}
              >
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold">
                    Workspace Analytics
                  </h2>

                  <p className="mt-4 text-slate-400">
                    Real-time collaboration insights and AI
                    recommendations.
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <GlassCard className="p-6">
              <h2 className="text-2xl font-semibold">
                Team Activity
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Simran updated Project Roadmap",
                  "Apurva created AI Summary",
                  "Ninad commented on UI Review",
                ].map((activity) => (
                  <div
                    key={activity}
                    className="rounded-2xl bg-slate-800/50 p-4"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-2xl font-semibold">
                AI Copilot
              </h2>

              <div className="mt-6 rounded-2xl bg-slate-800/50 p-4">
                You have 3 pending approvals and 2
                high-priority tasks.
              </div>

              <button className="mt-6 w-full rounded-2xl bg-violet-500 py-3 font-semibold transition hover:opacity-90">
                Open Assistant
              </button>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  )
}