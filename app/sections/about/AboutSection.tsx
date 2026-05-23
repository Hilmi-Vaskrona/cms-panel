"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { Save } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-12 animate-fade-in">
      <PageHeader
        title="Tentang Vokasi"
        description="Kelola halaman tentang kami, visi misi, dan informasi institusi"
        actions={<Button icon={<Save size={16} />}>Simpan Perubahan</Button>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-fade-in">
        <Card title="Deskripsi Sekolah" subtitle="Informasi umum tentang institusi">
          <div className="flex flex-col gap-6">
            <Input label="Nama Institusi" defaultValue="Delta Team — Komunitas SMK Kab. Bogor" />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Deskripsi</label>
              <textarea className="cms-input min-h-[140px] resize-none" defaultValue="Delta Team merupakan komunitas profesional Kepala Sekolah Menengah Kejuruan (SMK) di Kabupaten Bogor. Wadah kolaboratif ini dikembangkan untuk meningkatkan mutu pendidikan kejuruan secara terarah, inovatif, dan berstandar global." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Tahun Berdiri" defaultValue="2020" />
              <Input label="Nama Pendiri" defaultValue="Ibu Dina Martha Tiraswati, M.Pd." />
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <Card title="Visi" subtitle="Visi utama institusi">
            <textarea className="cms-input min-h-[120px] resize-none" defaultValue="Terwujudnya sekolah menengah kejuruan yang unggul, kolaboratif, dan berdaya saing global melalui kepemimpinan pendidikan yang profesional, inovatif, dan berorientasi pada kebutuhan dunia kerja." />
          </Card>

          <Card title="Misi" subtitle="Misi strategis institusi">
            <div className="flex flex-col gap-4">
              {[
                "Mengembangkan kolaborasi strategis antar Kepala SMK dan perguruan tinggi.",
                "Membangun kemitraan berkelanjutan dengan DUDI.",
                "Meningkatkan kapasitas kepemimpinan melalui program Entrepreneurship Leader.",
                "Meningkatkan kompetensi guru melalui pelatihan bersama tutor terbaik.",
                "Mendorong transformasi SMK agar adaptif terhadap teknologi global.",
              ].map((misi, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-slate-100/70 hover:border-slate-200">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  <input className="w-full bg-transparent text-sm text-slate-700 outline-none" defaultValue={misi} />
                </div>
              ))}
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors mt-1">+ Tambah Misi</button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-fade-in">
        <Card title="Sambutan Kepala Sekolah">
          <textarea className="cms-input min-h-[120px] resize-none" placeholder="Tulis sambutan kepala sekolah..." />
        </Card>
        <Card title="Keunggulan">
          <textarea className="cms-input min-h-[120px] resize-none" placeholder="Tulis keunggulan institusi..." />
        </Card>
        <Card title="Timeline Perkembangan">
          <textarea className="cms-input min-h-[120px] resize-none" placeholder="Tulis timeline perkembangan..." />
        </Card>
      </div>
    </div>
  );
}
