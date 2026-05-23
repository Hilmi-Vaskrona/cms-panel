"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { Search, Download, Filter, Eye } from "lucide-react";
import { useState } from "react";

const pendaftar = [
  { id: 1, name: "Muhammad Rizky", email: "rizky@email.com", program: "RPL", date: "17 Mei 2026", status: "pending" },
  { id: 2, name: "Siti Aisyah", email: "aisyah@email.com", program: "DKV", date: "16 Mei 2026", status: "approved" },
  { id: 3, name: "Farhan Adi", email: "farhan@email.com", program: "TJKT", date: "15 Mei 2026", status: "approved" },
  { id: 4, name: "Nadia Putri", email: "nadia@email.com", program: "MPLB", date: "14 Mei 2026", status: "rejected" },
  { id: 5, name: "Dimas Prasetyo", email: "dimas@email.com", program: "AKL", date: "13 Mei 2026", status: "pending" },
];

const statusMap: Record<string, { variant: "green" | "amber" | "red"; label: string }> = {
  approved: { variant: "green", label: "Diterima" },
  pending: { variant: "amber", label: "Menunggu" },
  rejected: { variant: "red", label: "Ditolak" },
};

export default function PendaftaranSection() {
  const [search, setSearch] = useState("");
  const filtered = pendaftar.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="animate-fade-in">
      <PageHeader title="Pendaftaran" description="Kelola data pendaftar siswa baru" badge={`${pendaftar.filter((p) => p.status === "pending").length} Menunggu`} actions={<Button variant="secondary" icon={<Download size={16} />}>Export Data</Button>} />
      <Card padding="none" className="overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 w-full sm:w-64 hover:border-slate-300 transition-colors">
            <Search size={15} className="text-slate-400" />
            <input type="text" placeholder="Cari pendaftar..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400" />
          </div>
          <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"><Filter size={14} /> Filter</button>
        </div>
        <div className="overflow-x-auto">
          <table className="cms-table">
            <thead><tr><th>Nama</th><th>Email</th><th>Program</th><th>Tanggal</th><th>Status</th><th className="text-right">Aksi</th></tr></thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td className="font-medium text-slate-700">{p.name}</td>
                  <td className="text-slate-500 text-sm">{p.email}</td>
                  <td><Badge variant="purple">{p.program}</Badge></td>
                  <td className="text-slate-400 text-sm">{p.date}</td>
                  <td><Badge variant={statusMap[p.status].variant} dot>{statusMap[p.status].label}</Badge></td>
                  <td><div className="flex justify-end"><button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Eye size={15} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
