"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import { Plus, Edit2, Trash2, Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Rina Sari", role: "Alumni RPL 2024", text: "Belajar di SMK ini sangat membantu saya mendapatkan pekerjaan pertama sebagai developer di perusahaan teknologi.", rating: 5 },
  { id: 2, name: "Budi Santoso", role: "Alumni TJKT 2023", text: "Fasilitas lab dan pengajar yang berpengalaman membuat proses belajar sangat menyenangkan dan praktis.", rating: 5 },
  { id: 3, name: "Dewi Anggraini", role: "Alumni DKV 2024", text: "Program PKL di perusahaan besar membuka banyak peluang karir bagi saya setelah lulus.", rating: 4 },
  { id: 4, name: "Ahmad Fauzi", role: "Orang Tua Siswa", text: "Anak saya berkembang pesat dalam kemampuan teknis dan karakter selama bersekolah di sini.", rating: 5 },
];

export default function TestimoniSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Testimoni"
        description="Kelola testimoni dari alumni, siswa, dan orang tua"
        badge={`${testimonials.length} Testimoni`}
        actions={<Button icon={<Plus size={16} />}>Tambah Testimoni</Button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-fade-in">
        {testimonials.map((t) => (
          <Card key={t.id} className="group hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ring-2 ring-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{t.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 flex-shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 italic border-l-2 border-slate-200 pl-3.5">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-end gap-1 pt-3.5 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors"><Edit2 size={14} /></button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
