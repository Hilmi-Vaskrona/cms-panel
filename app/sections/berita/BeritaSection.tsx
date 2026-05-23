"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import EmptyState from "@/app/components/ui/EmptyState";
import { Plus, Search, Edit2, Trash2, Eye, Filter } from "lucide-react";
import { useState } from "react";

const dummyBerita = [
  { id: 1, title: "Peluang Karir Lulusan SMK di Era Digital", category: "Artikel", status: "published", author: "Admin", date: "17 Mei 2026", featured: true },
  { id: 2, title: "Kunjungan Industri ke PT Telkom Indonesia", category: "Berita", status: "published", author: "Editor", date: "15 Mei 2026", featured: false },
  { id: 3, title: "Prestasi Siswa TJKT di Lomba Nasional", category: "Berita", status: "published", author: "Admin", date: "12 Mei 2026", featured: true },
  { id: 4, title: "Workshop Desain Grafis bersama Industri", category: "Kegiatan", status: "draft", author: "Editor", date: "10 Mei 2026", featured: false },
  { id: 5, title: "Panduan Pendaftaran Siswa Baru 2026/2027", category: "Pengumuman", status: "draft", author: "Admin", date: "8 Mei 2026", featured: false },
];

export default function BeritaSection() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = dummyBerita.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || b.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Berita & Artikel"
        description="Kelola berita, artikel, dan konten publikasi website"
        badge={`${dummyBerita.length} Total`}
        actions={
          <Button icon={<Plus size={16} />}>Tambah Artikel</Button>
        }
      />

      <Card padding="none" className="overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 flex-1 sm:flex-none sm:w-64 hover:border-slate-300 transition-colors">
              <Search size={15} className="text-slate-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors">
              <Filter size={14} />
              Filter
            </button>
          </div>

          <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg">
            {["all", "published", "draft"].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${filterStatus === s
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                {s === "all" ? "Semua" : s === "published" ? "Published" : "Draft"}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="cms-table">
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Kategori</th>
                  <th>Status</th>
                  <th>Penulis</th>
                  <th>Tanggal</th>
                  <th className="text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-700 max-w-xs truncate block">
                          {item.title}
                        </span>
                        {item.featured && (
                          <Badge variant="amber">Featured</Badge>
                        )}
                      </div>
                    </td>
                    <td>
                      <Badge variant="gray">{item.category}</Badge>
                    </td>
                    <td>
                      <Badge
                        variant={item.status === "published" ? "green" : "amber"}
                        dot
                      >
                        {item.status === "published" ? "Published" : "Draft"}
                      </Badge>
                    </td>
                    <td className="text-slate-500">{item.author}</td>
                    <td className="text-slate-400 text-sm">{item.date}</td>
                    <td>
                      <div className="flex items-center justify-end gap-1">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                          <Eye size={15} />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                          <Edit2 size={15} />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="Tidak ada artikel ditemukan"
            description="Coba ubah filter atau kata kunci pencarian Anda"
          />
        )}

        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
          <p className="text-sm text-slate-400">
            Menampilkan {filtered.length} dari {dummyBerita.length} artikel
          </p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg text-sm font-medium bg-blue-600 text-white flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 flex items-center justify-center">3</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
