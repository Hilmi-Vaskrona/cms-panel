"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  GraduationCap,
  Image,
  Handshake,
  BriefcaseBusiness,
  Users,
  MessageSquareQuote,
  HelpCircle,
  Settings,
  UserCog,
  Globe,
  BookOpen,
  Mail,
  ClipboardList,
  ChevronDown,
  PanelLeft,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
  defaultOpen?: boolean;
}

const menuGroups: MenuGroup[] = [
  {
    title: "Menu Utama",
    defaultOpen: true,
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
    ],
  },
  {
    title: "Konten Website",
    defaultOpen: true,
    items: [
      { label: "Hero Section", href: "/hero", icon: Globe },
      { label: "Tentang Vokasi", href: "/about", icon: BookOpen },
      { label: "FAQ", href: "/faq", icon: HelpCircle },
      { label: "Kontak", href: "/kontak", icon: Mail },
    ],
  },
  {
    title: "Akademik",
    defaultOpen: true,
    items: [
      { label: "Program / Jurusan", href: "/program", icon: GraduationCap },
      { label: "PKL / Magang", href: "/pkl", icon: BriefcaseBusiness },
      { label: "Alumni", href: "/alumni", icon: Users },
      { label: "Testimoni", href: "/testimoni", icon: MessageSquareQuote },
    ],
  },
  {
    title: "Publikasi",
    defaultOpen: true,
    items: [
      { label: "Berita & Artikel", href: "/berita", icon: Newspaper },
      { label: "Galeri", href: "/galeri", icon: Image },
    ],
  },
  {
    title: "Kemitraan",
    items: [
      { label: "Partner Industri", href: "/partner", icon: Handshake },
      { label: "Pendaftaran", href: "/pendaftaran", icon: ClipboardList },
    ],
  },
  {
    title: "Pengaturan",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "User Management", href: "/users", icon: UserCog },
    ],
  },
];

function SidebarGroup({ group }: { group: MenuGroup }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(group.defaultOpen ?? false);
  const hasActiveItem = group.items.some(
    (item) => pathname === item.href
  );

  const isOpen = open || hasActiveItem;

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-300 transition-colors"
      >
        {group.title}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-0.5 px-2 pb-1">
          {group.items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group ${isActive
                    ? "bg-blue-600/20 text-blue-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
              >
                <Icon
                  size={17}
                  className={`flex-shrink-0 ${isActive
                      ? "text-blue-400"
                      : "text-slate-500 group-hover:text-slate-300"
                    }`}
                />
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen bg-[#0f172a] border-r border-slate-800/60 flex flex-col z-50 w-60">
      <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <span className="text-white font-bold text-sm">Δ</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-white leading-tight">
              Delta CMS
            </h1>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide">
              Vokasi Admin Panel
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 no-scrollbar">
        {menuGroups.map((group) => (
          <SidebarGroup key={group.title} group={group} />
        ))}
      </nav>

      <div className="p-3 border-t border-slate-800/60">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md ring-2 ring-slate-700">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-200 truncate">
              Admin
            </p>
            <p className="text-xs text-slate-500 truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
