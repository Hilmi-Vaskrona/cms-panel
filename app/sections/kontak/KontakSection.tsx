"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import { Save, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function KontakSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Kontak"
        description="Kelola informasi kontak yang ditampilkan di website"
        actions={<Button icon={<Save size={16} />}>Simpan Perubahan</Button>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-fade-in">
        <Card title="Informasi Kontak" subtitle="Data kontak utama">
          <div className="flex flex-col gap-6">
            <Input label="Email" type="email" icon={<Mail size={15} />} defaultValue="DeltaKv@delta-kv.com" />
            <Input label="Nomor Telepon" type="tel" icon={<Phone size={15} />} defaultValue="+62 812-9342-3248" />
            <Input label="Alamat" icon={<MapPin size={15} />} defaultValue="Jonggol, Kabupaten Bogor, Jawa Barat" />
            <Input label="Website" type="url" icon={<Globe size={15} />} defaultValue="https://delta-kv.com" />
          </div>
        </Card>

        <div className="flex flex-col gap-8">
          <Card title="Google Maps Embed" subtitle="URL embed iframe Google Maps">
            <textarea className="cms-input min-h-[80px] resize-none text-xs" defaultValue="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429..." placeholder="Paste Google Maps embed URL di sini..." />
          </Card>
          <Card title="Social Media" subtitle="Link akun media sosial resmi">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Facebook" placeholder="https://facebook.com/..." />
              <Input label="Instagram" placeholder="https://instagram.com/..." />
              <Input label="Twitter / X" placeholder="https://x.com/..." />
              <Input label="YouTube" placeholder="https://youtube.com/..." />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
