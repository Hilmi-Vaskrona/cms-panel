"use client";

import { type ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  gradient: string;
  iconColor: string;
  trend?: { value: string; positive: boolean };
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  gradient,
  iconColor,
  trend,
  subtitle,
}: StatCardProps) {
  return (
    <div
      className={`cms-card p-5 lg:p-6 ${gradient} group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-default`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />

      {/* Decorative corner glow */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconColor} bg-white/70 shadow-sm ring-1 ring-black/[0.04] group-hover:shadow-md group-hover:scale-110 group-hover:bg-white/90 transition-all duration-300`}
        >
          {icon}
        </div>
        {trend && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
              trend.positive
                ? "text-emerald-700 bg-emerald-50/80"
                : "text-red-600 bg-red-50/80"
            }`}
          >
            {trend.positive ? (
              <TrendingUp size={12} />
            ) : (
              <TrendingDown size={12} />
            )}
            {trend.value}
          </div>
        )}
      </div>

      <p className="text-[28px] font-bold text-slate-800 mb-1 tracking-tight leading-none">
        {value}
      </p>
      <p className="text-sm font-medium text-slate-600">{title}</p>
      {subtitle && (
        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
          <span className="inline-block w-1 h-1 rounded-full bg-slate-300" />
          {subtitle}
        </p>
      )}
    </div>
  );
}
