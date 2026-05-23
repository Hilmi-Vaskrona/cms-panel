"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { Plus, Edit2, Trash2, GraduationCap, ToggleLeft, ToggleRight } from "lucide-react";

const programs = [
  { id: 1, name: "Teknik Komputer Jaringan & Telekomunikasi (TJKT)", students: 320, status: "active", icon: "💻", careers: "Network Engineer, System Admin" },
  { id: 2, name: "Rekayasa Perangkat Lunak (RPL)", students: 280, status: "active", icon: "🖥️", careers: "Software Developer, Web Developer" },
  { id: 3, name: "Desain Komunikasi Visual (DKV)", students: 195, status: "active", icon: "🎨", careers: "Graphic Designer, UI/UX Designer" },
  { id: 4, name: "Manajemen Perkantoran (MPLB)", students: 150, status: "active", icon: "📋", careers: "Office Manager, Secretary" },
  { id: 5, name: "Akuntansi & Keuangan Lembaga (AKL)", students: 130, status: "active", icon: "📊", careers: "Accountant, Financial Analyst" },
  { id: 6, name: "Teknik Kendaraan Ringan (TKR)", students: 110, status: "inactive", icon: "🔧", careers: "Automotive Technician, Mechanic" },
];

export default function ProgramSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Program / Jurusan"
        description="Kelola program keahlian dan jurusan yang tersedia"
        badge={`${programs.length} Program`}
        actions={<Button icon={<Plus size={16} />}>Tambah Program</Button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 stagger-fade-in">
        {programs.map((prog) => (
          <Card key={prog.id} className="group hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                {prog.icon}
              </div>
              <div className="flex items-center gap-1.5">
                <Badge variant={prog.status === "active" ? "green" : "gray"} dot>
                  {prog.status === "active" ? "Aktif" : "Nonaktif"}
                </Badge>
              </div>
            </div>

            <h3 className="text-base font-semibold text-slate-800 mb-1.5 leading-snug min-h-[2.5rem]">
              {prog.name}
            </h3>
            <p className="text-xs text-slate-400 mb-4 line-clamp-1">Peluang: {prog.careers}</p>

            <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <GraduationCap size={14} />
                <span className="font-medium">{prog.students}</span> siswa
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                  <Edit2 size={14} />
                </button>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                  {prog.status === "active" ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
                </button>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
