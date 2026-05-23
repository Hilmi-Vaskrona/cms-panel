"use client";

import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  badge?: string;
}

export default function PageHeader({
  title,
  description,
  actions,
  badge,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h1>
          {badge && (
            <span className="cms-badge cms-badge-blue">{badge}</span>
          )}
        </div>
        {description && (
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>}
    </div>
  );
}
