"use client";
import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { Save, Image as ImageIcon } from "lucide-react";

export default function SettingsSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Settings" description="Konfigurasi umum dan metadata website" actions={<Button icon={<Save size={16} />}>Simpan</Button>} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-fade-in">
        <Card title="Metadata Website" subtitle="Informasi SEO dan judul website">
          <div className="flex flex-col gap-6">
            <Input label="Nama Website" defaultValue="Delta Team — SMK Vokasi Kab. Bogor" />
            <Input label="Tagline" defaultValue="Kolaborasi, Pengembangan & Inovasi" />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Meta Description</label>
              <textarea className="cms-input min-h-[100px] resize-none" defaultValue="Website resmi Delta Team, komunitas profesional Kepala SMK di Kabupaten Bogor." />
            </div>
            <Input label="Google Analytics ID" placeholder="G-XXXXXXXXXX" />
          </div>
        </Card>
        <div className="flex flex-col gap-6">
          <Card title="Logo & Favicon" subtitle="Upload branding website">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Logo</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group">
                  <ImageIcon size={28} className="mx-auto text-slate-300 mb-1 group-hover:text-blue-400 transition-colors" />
                  <p className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">Upload Logo</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Favicon</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 cursor-pointer group">
                  <ImageIcon size={28} className="mx-auto text-slate-300 mb-1 group-hover:text-blue-400 transition-colors" />
                  <p className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">Upload Favicon</p>
                </div>
              </div>
            </div>
          </Card>
          <Card title="Footer" subtitle="Konten area footer website">
            <div className="flex flex-col gap-4">
              <Input label="Copyright Text" defaultValue="Copyright © 2025 DeltaKv. All rights reserved." />
              <Input label="Privacy Policy URL" placeholder="/privacy-policy" />
              <Input label="Terms of Service URL" placeholder="/terms" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
