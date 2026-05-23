"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { Plus, Edit2, Trash2, ExternalLink, Building2 } from "lucide-react";

const partners = [
  { id: 1, name: "PT. Telkom Indonesia", type: "BUMN", cooperation: "PKL, Rekrutmen", status: "active", website: "telkom.co.id" },
  { id: 2, name: "Tokopedia", type: "Swasta", cooperation: "PKL, Workshop", status: "active", website: "tokopedia.com" },
  { id: 3, name: "Bank BRI", type: "BUMN", cooperation: "PKL", status: "active", website: "bri.co.id" },
  { id: 4, name: "Astra International", type: "Swasta", cooperation: "Magang, Rekrutmen", status: "active", website: "astra.co.id" },
  { id: 5, name: "Google Indonesia", type: "Multinasional", cooperation: "Training, Sertifikasi", status: "active", website: "google.co.id" },
  { id: 6, name: "PT. PLN Persero", type: "BUMN", cooperation: "PKL", status: "inactive", website: "pln.co.id" },
];

export default function PartnerSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Partner Industri"
        description="Kelola perusahaan dan institusi mitra kerja sama"
        badge={`${partners.length} Partner`}
        actions={<Button icon={<Plus size={16} />}>Tambah Partner</Button>}
      />

      <Card padding="none" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cms-table">
            <thead>
              <tr>
                <th>Perusahaan</th>
                <th>Tipe</th>
                <th>Kerja Sama</th>
                <th>Status</th>
                <th>Website</th>
                <th className="text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Building2 size={16} className="text-slate-500" />
                      </div>
                      <span className="font-medium text-slate-700">{p.name}</span>
                    </div>
                  </td>
                  <td><Badge variant="purple">{p.type}</Badge></td>
                  <td className="text-slate-500 text-sm">{p.cooperation}</td>
                  <td>
                    <Badge variant={p.status === "active" ? "green" : "gray"} dot>
                      {p.status === "active" ? "Aktif" : "Nonaktif"}
                    </Badge>
                  </td>
                  <td>
                    <a href={`https://${p.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      {p.website} <ExternalLink size={12} />
                    </a>
                  </td>
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
