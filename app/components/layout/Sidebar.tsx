"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        CMS PANEL
      </h1>

      <nav className="flex flex-col gap-4">
        <Link href="/">
          Dashboard
        </Link>

        <Link href="/berita">
          Berita
        </Link>
      </nav>
    </aside>
  );
}