"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { Plus, Edit2, Trash2, MapPin, Calendar, ExternalLink } from "lucide-react";

const pklData = [
  { id: 1, company: "PT. Telkom Indonesia", position: "Network Technician", location: "Jakarta", deadline: "30 Jun 2026", status: "open", slots: 5 },
  { id: 2, company: "Tokopedia", position: "Junior Web Developer", location: "Jakarta", deadline: "15 Jul 2026", status: "open", slots: 3 },
  { id: 3, company: "Bank BRI", position: "IT Support", location: "Bogor", deadline: "20 Jun 2026", status: "open", slots: 4 },
  { id: 4, company: "Astra International", position: "Mechanic Apprentice", location: "Bogor", deadline: "10 Jun 2026", status: "closed", slots: 0 },
  { id: 5, company: "Google Indonesia", position: "Data Entry Intern", location: "Jakarta", deadline: "25 Jul 2026", status: "open", slots: 2 },
];

export default function PKLSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="PKL / Magang"
        description="Kelola lowongan praktik kerja lapangan dan magang untuk siswa"
        badge={`${pklData.filter(p => p.status === 'open').length} Aktif`}
        actions={<Button icon={<Plus size={16} />}>Tambah Lowongan</Button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-fade-in">
        {pklData.map((pkl) => (
          <Card key={pkl.id} className="group hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">{pkl.position}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{pkl.company}</p>
              </div>
              <Badge variant={pkl.status === "open" ? "green" : "red"} dot>
                {pkl.status === "open" ? "Dibuka" : "Ditutup"}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-400 mt-3 mb-4">
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {pkl.location}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> Deadline: {pkl.deadline}</span>
              {pkl.slots > 0 && <Badge variant="blue">{pkl.slots} slot</Badge>}
            </div>

            <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
              <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Lihat Detail <ExternalLink size={11} />
              </a>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors"><Edit2 size={14} /></button>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
