"use client";

import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, className = "", disabled, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={`cms-input ${icon ? "pl-10" : ""} ${error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
              } ${disabled ? "bg-slate-50 text-slate-400 cursor-not-allowed" : ""} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
        {hint && !error && <p className="text-xs text-slate-400 mt-0.5">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
