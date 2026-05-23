"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import { Plus, FolderOpen, Image as ImageIcon, Trash2 } from "lucide-react";

const albums = [
  { id: 1, name: "Wisuda Angkatan 2025", count: 24, cover: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop", date: "15 Mei 2026" },
  { id: 2, name: "Kunjungan Industri", count: 18, cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop", date: "10 Mei 2026" },
  { id: 3, name: "Seminar Nasional", count: 12, cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop", date: "5 Mei 2026" },
  { id: 4, name: "Ekstrakurikuler", count: 32, cover: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400&auto=format&fit=crop", date: "1 Mei 2026" },
  { id: 5, name: "Pameran Inovasi", count: 15, cover: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=400&auto=format&fit=crop", date: "28 Apr 2026" },
  { id: 6, name: "Diskusi Kelompok", count: 8, cover: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=400&auto=format&fit=crop", date: "20 Apr 2026" },
];

export default function GaleriSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Galeri"
        description="Kelola foto dan video dokumentasi kegiatan"
        badge={`${albums.reduce((a, b) => a + b.count, 0)} Media`}
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" icon={<FolderOpen size={16} />}>Album Baru</Button>
            <Button icon={<Plus size={16} />}>Upload Media</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
        {albums.map((album) => (
          <Card key={album.id} padding="none" className="group overflow-hidden hover:-translate-y-0.5 transition-all duration-200">
            <div className="relative h-44 overflow-hidden">
              <img
                src={album.cover}
                alt={album.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-semibold text-sm drop-shadow-sm">{album.name}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{album.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-white/90 text-xs bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                  <ImageIcon size={12} /> {album.count}
                </span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">Lihat Album</button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Trash2 size={14} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
