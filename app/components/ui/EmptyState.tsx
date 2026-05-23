"use client";

import { type ReactNode } from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 text-slate-400 transition-transform duration-200 group-hover:scale-110">
        {icon || <Inbox size={28} />}
      </div>
      <h3 className="text-lg font-semibold text-slate-700 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">{description}</p>
      )}
      {action}
    </div>
  );
}
