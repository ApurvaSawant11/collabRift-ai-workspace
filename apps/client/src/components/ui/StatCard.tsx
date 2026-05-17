import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { GlassCard } from "./GlassCard";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export const StatCard = ({ title, value, subtitle, icon: Icon }: Props) => {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <GlassCard className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-400">{title}</p>

            <h3 className="mt-3 text-3xl font-bold">{value}</h3>

            <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
          </div>

          <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-400">
            <Icon size={22} />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
