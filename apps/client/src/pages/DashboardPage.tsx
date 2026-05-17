import { Activity, Brain, CheckCircle2, Users } from "lucide-react";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";

export const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-auto p-4 lg:p-6">
          <SectionHeader
            title="Workspace Overview"
            subtitle="Monitor collaboration, AI activity, and team productivity."
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Team Members"
              value="14"
              subtitle="+3 this week"
              icon={Users}
            />

            <StatCard
              title="Tasks Completed"
              value="124"
              subtitle="18 completed today"
              icon={CheckCircle2}
            />

            <StatCard
              title="AI Actions"
              value="89"
              subtitle="Generated insights"
              icon={Brain}
            />

            <StatCard
              title="Live Activity"
              value="32"
              subtitle="Users collaborating"
              icon={Activity}
            />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
            <GlassCard className="p-6">
              <SectionHeader
                title="Recent Team Activity"
                subtitle="Live updates across workspaces."
              />

              <div className="mt-6 space-y-4">
                {[
                  "Simran updated Marketing Roadmap",
                  "Apurva generated AI sprint summary",
                  "Ninad completed UI review tasks",
                  "Rahul created product documentation",
                ].map((activity) => (
                  <div
                    key={activity}
                    className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <SectionHeader
                title="AI Copilot"
                subtitle="Smart workspace assistance."
              />

              <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">
                <p className="text-sm leading-7 text-slate-300">
                  You have 3 pending approvals and 2 high-priority tasks
                  requiring attention.
                </p>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-violet-500 py-3 font-semibold transition hover:bg-violet-600">
                Open AI Assistant
              </button>

              <div className="mt-6 space-y-3">
                {[
                  "Generate meeting summary",
                  "Analyze team productivity",
                  "Prioritize pending tasks",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-left transition hover:border-violet-500"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};
