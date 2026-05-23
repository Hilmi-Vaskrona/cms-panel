"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { Save, Image as ImageIcon, Type, MousePointerClick, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Hero Section"
        description="Kelola tampilan hero/banner utama di halaman depan website"
        actions={<Button icon={<Save size={16} />}>Simpan Perubahan</Button>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-fade-in">
        <Card title="Konten Hero" subtitle="Teks dan tombol CTA">
          <div className="flex flex-col gap-5">
            <Input label="Badge / Label" placeholder="contoh: Kolaborasi, Pengembangan & Inovasi" icon={<Type size={15} />} defaultValue="Kolaborasi, Pengembangan & Inovasi" />
            <Input label="Heading Utama" placeholder="Judul hero" defaultValue="Delta Team" />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Sub-heading</label>
              <textarea className="cms-input min-h-[100px] resize-none" placeholder="Deskripsi singkat hero..." defaultValue="Wadah kolaboratif profesional Kepala SMK Kabupaten Bogor untuk mencetak generasi vokasi yang unggul, inovatif, dan berdaya saing global." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Teks Tombol CTA Utama" placeholder="contoh: Bergabung Sekarang" icon={<MousePointerClick size={15} />} defaultValue="Bergabung Sekarang" />
              <Input label="Teks Tombol CTA Sekunder" placeholder="contoh: Pelajari Lebih Lanjut" defaultValue="Pelajari Lebih Lanjut" />
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <Card title="Media Hero" subtitle="Gambar utama dan background">
          <div className="flex flex-col gap-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Hero Image / Logo</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group">
                  <ImageIcon size={36} className="mx-auto text-slate-300 mb-2 group-hover:text-blue-400 transition-colors" />
                  <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">Klik atau drag untuk upload</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG, SVG maks 2MB</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Background Image</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group">
                  <ImageIcon size={36} className="mx-auto text-slate-300 mb-2 group-hover:text-blue-400 transition-colors" />
                  <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">Klik atau drag untuk upload</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG maks 5MB</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Statistik Hero" subtitle="Angka yang ditampilkan di hero">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Label 1" placeholder="Sekolah" defaultValue="35+" icon={<BarChart3 size={15} />} />
              <Input label="Label 2" placeholder="Program" defaultValue="8+" />
              <Input label="Label 3" placeholder="Alumni" defaultValue="3000+" />
              <Input label="Label 4" placeholder="Partner" defaultValue="24+" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
