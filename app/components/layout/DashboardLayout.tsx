"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <Sidebar />

      <div className="flex flex-col min-h-screen pl-60">
        <Navbar />

        <main className="flex-1 px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
