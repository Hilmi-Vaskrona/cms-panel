"use client";
import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import { Plus, Edit2, Trash2, Shield } from "lucide-react";

const users = [
  { id: 1, name: "Admin Utama", email: "admin@delta-kv.com", role: "Super Admin", status: "active" },
  { id: 2, name: "Siti Editor", email: "siti@delta-kv.com", role: "Editor", status: "active" },
  { id: 3, name: "Budi Akademik", email: "budi@delta-kv.com", role: "Admin Akademik", status: "active" },
  { id: 4, name: "Rina Content", email: "rina@delta-kv.com", role: "Admin Content", status: "inactive" },
];

const roleColors: Record<string, "blue" | "purple" | "amber" | "green"> = {
  "Super Admin": "blue", "Editor": "purple", "Admin Akademik": "amber", "Admin Content": "green",
};

export default function UsersSection() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="User Management" description="Kelola akun pengguna dan hak akses CMS" badge={`${users.length} Users`} actions={<Button icon={<Plus size={16} />}>Tambah User</Button>} />
      <Card padding="none" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="cms-table">
            <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th className="text-right">Aksi</th></tr></thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm ring-2 ring-white">{u.name.charAt(0)}</div>
                      <span className="font-medium text-slate-700">{u.name}</span>
                    </div>
                  </td>
                  <td className="text-slate-500 text-sm">{u.email}</td>
                  <td><Badge variant={roleColors[u.role] || "gray"}><Shield size={11} className="inline mr-1" />{u.role}</Badge></td>
                  <td><Badge variant={u.status === "active" ? "green" : "gray"} dot>{u.status === "active" ? "Aktif" : "Nonaktif"}</Badge></td>
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
