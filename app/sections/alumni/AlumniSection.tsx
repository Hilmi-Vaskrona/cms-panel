"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { Plus, Edit2, Trash2, Search, Briefcase } from "lucide-react";
import { useState } from "react";

const alumniData = [
  { id: 1, name: "Rina Sari", year: "2024", job: "Frontend Developer", company: "Tokopedia", program: "RPL" },
  { id: 2, name: "Budi Santoso", year: "2023", job: "Network Engineer", company: "PT. Telkom", program: "TJKT" },
  { id: 3, name: "Dewi Anggraini", year: "2024", job: "UI/UX Designer", company: "Gojek", program: "DKV" },
  { id: 4, name: "Ahmad Fauzi", year: "2023", job: "Accounting Staff", company: "Bank BRI", program: "AKL" },
  { id: 5, name: "Siti Nurhaliza", year: "2022", job: "Admin Officer", company: "Astra International", program: "MPLB" },
  { id: 6, name: "Reza Pratama", year: "2024", job: "Backend Developer", company: "Bukalapak", program: "RPL" },
];

export default function AlumniSection() {
  const [search, setSearch] = useState("");
  const filtered = alumniData.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Alumni"
        description="Kelola data alumni dan tracking karir lulusan"
        badge={`${alumniData.length} Alumni`}
        actions={<Button icon={<Plus size={16} />}>Tambah Alumni</Button>}
      />

      <Card padding="none" className="overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 max-w-sm hover:border-slate-300 transition-colors">
            <Search size={15} className="text-slate-400" />
            <input type="text" placeholder="Cari alumni..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="cms-table cms-table-hover">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Angkatan</th>
                <th>Program</th>
                <th>Pekerjaan</th>
                <th>Perusahaan</th>
                <th className="text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm ring-2 ring-white">
                        {a.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-700">{a.name}</span>
                    </div>
                  </td>
                  <td><Badge variant="gray">{a.year}</Badge></td>
                  <td><Badge variant="purple">{a.program}</Badge></td>
                  <td>
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <Briefcase size={13} className="text-slate-400" /> {a.job}
                    </span>
                  </td>
                  <td className="text-slate-500 text-sm">{a.company}</td>
                  <td>
                    <div className="flex items-center justify-end gap-1">
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors"><Edit2 size={15} /></button>
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
