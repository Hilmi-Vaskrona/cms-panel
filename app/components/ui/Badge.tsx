"use client";

import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "green" | "amber" | "red" | "purple" | "gray";
  dot?: boolean;
}

const variants = {
  blue: "cms-badge-blue",
  green: "cms-badge-green",
  amber: "cms-badge-amber",
  red: "cms-badge-red",
  purple: "cms-badge-purple",
  gray: "cms-badge-gray",
};

export default function Badge({
  children,
  variant = "blue",
  dot,
}: BadgeProps) {
  return (
    <span className={`cms-badge ${variants[variant]}`}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${variant === "green"
              ? "bg-emerald-500"
              : variant === "red"
                ? "bg-red-500"
                : variant === "amber"
                  ? "bg-amber-500"
                  : "bg-blue-500"
            }`}
        />
      )}
      {children}
    </span>
  );
}
