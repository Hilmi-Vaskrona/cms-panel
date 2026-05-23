"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-7",
  lg: "p-8",
};

const separatorMargins = {
  none: "",
  sm: "-mx-5",
  md: "-mx-7",
  lg: "-mx-8",
};

export default function Card({
  children,
  className = "",
  padding = "md",
  title,
  subtitle,
  actions,
}: CardProps) {
  return (
    <div className={`cms-card ${paddings[padding]} ${className}`}>
      {(title || actions) && (
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="min-w-0">
            {title && (
              <h3 className="text-base font-semibold text-slate-800 leading-snug">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-slate-400 mt-0.5 leading-normal">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex-shrink-0">{actions}</div>}
        </div>
      )}
      {title && (
        <div className={`h-px bg-slate-100 ${separatorMargins[padding]} mb-6`} />
      )}
      {children}
    </div>
  );
}
