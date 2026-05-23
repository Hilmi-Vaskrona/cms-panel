"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="flex items-center justify-between px-8 lg:px-10 xl:px-12 h-16">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div
            className={`flex items-center gap-2.5 w-full px-3.5 py-2 rounded-xl border transition-all duration-200 ${searchFocused
                ? "border-blue-300 bg-white shadow-sm ring-1 ring-blue-100"
                : "border-slate-200 bg-slate-50/80 hover:bg-slate-50 hover:border-slate-300"
              }`}
          >
            <Search size={16} className="text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Cari menu, konten..."
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-slate-100 rounded border border-slate-200">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white pulse-dot" />
          </button>

          <div className="w-px h-8 bg-slate-200 mx-1" />

          <button className="flex items-center gap-2.5 pl-1 pr-2 py-1.5 rounded-xl hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm ring-2 ring-white">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-slate-700 leading-tight">
                Admin
              </p>
              <p className="text-[11px] text-slate-400">Super Admin</p>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
