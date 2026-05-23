"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Newspaper,
  Handshake,
  BriefcaseBusiness,
  Award,
  Image,
  ClipboardList,
  Clock,
  ArrowUpRight,
  FileText,
  UserPlus,
  ImagePlus,
  Sparkles,
  Zap,
  Globe,
  Activity,
  Shield,
  ChevronRight,
  CalendarDays,
  Layers,
} from "lucide-react";
import StatCard from "@/app/components/ui/StatCard";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";

/* ── Framer Motion Variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ── Data ── */
const stats = [
  {
    title: "Total Siswa",
    value: "1,248",
    icon: <Users size={20} />,
    gradient: "stat-gradient-blue",
    iconColor: "text-blue-600",
    trend: { value: "+12%", positive: true },
    subtitle: "Aktif tahun ini",
  },
  {
    title: "Program Vokasi",
    value: "8",
    icon: <GraduationCap size={20} />,
    gradient: "stat-gradient-purple",
    iconColor: "text-purple-600",
    trend: { value: "+2", positive: true },
    subtitle: "Jurusan tersedia",
  },
  {
    title: "Berita & Artikel",
    value: "56",
    icon: <Newspaper size={20} />,
    gradient: "stat-gradient-teal",
    iconColor: "text-teal-600",
    trend: { value: "+8", positive: true },
    subtitle: "Dipublikasikan",
  },
  {
    title: "Partner Industri",
    value: "24",
    icon: <Handshake size={20} />,
    gradient: "stat-gradient-green",
    iconColor: "text-emerald-600",
    subtitle: "Perusahaan mitra",
  },
  {
    title: "Lowongan PKL",
    value: "15",
    icon: <BriefcaseBusiness size={20} />,
    gradient: "stat-gradient-amber",
    iconColor: "text-amber-600",
    trend: { value: "3 baru", positive: true },
    subtitle: "Tersedia saat ini",
  },
  {
    title: "Alumni",
    value: "3,420",
    icon: <Award size={20} />,
    gradient: "stat-gradient-rose",
    iconColor: "text-rose-600",
    subtitle: "Tersebar di industri",
  },
  {
    title: "Galeri Kegiatan",
    value: "142",
    icon: <Image size={20} />,
    gradient: "stat-gradient-blue",
    iconColor: "text-blue-600",
    subtitle: "Foto & video",
  },
  {
    title: "Pendaftar Baru",
    value: "89",
    icon: <ClipboardList size={20} />,
    gradient: "stat-gradient-green",
    iconColor: "text-emerald-600",
    trend: { value: "+23%", positive: true },
    subtitle: "Bulan ini",
  },
];

const recentActivities = [
  {
    icon: <FileText size={16} />,
    iconBg: "bg-blue-100 text-blue-600",
    text: "Artikel baru dipublikasikan",
    detail: '"Peluang Karir Lulusan SMK di Era Digital"',
    time: "2 jam lalu",
    isNew: true,
  },
  {
    icon: <UserPlus size={16} />,
    iconBg: "bg-emerald-100 text-emerald-600",
    text: "Pendaftar baru masuk",
    detail: "Ahmad Fauzi — Program TJKT",
    time: "3 jam lalu",
    isNew: true,
  },
  {
    icon: <Handshake size={16} />,
    iconBg: "bg-purple-100 text-purple-600",
    text: "Partner industri baru",
    detail: "PT. Telkom Indonesia",
    time: "5 jam lalu",
    isNew: false,
  },
  {
    icon: <ImagePlus size={16} />,
    iconBg: "bg-amber-100 text-amber-600",
    text: "12 foto ditambahkan ke galeri",
    detail: "Album: Wisuda Angkatan 2025",
    time: "1 hari lalu",
    isNew: false,
  },
  {
    icon: <GraduationCap size={16} />,
    iconBg: "bg-teal-100 text-teal-600",
    text: "Program baru ditambahkan",
    detail: "Desain Komunikasi Visual (DKV)",
    time: "2 hari lalu",
    isNew: false,
  },
];

const quickActions = [
  {
    label: "Tambah Artikel",
    description: "Buat berita atau artikel baru",
    icon: <FileText size={20} />,
    href: "/berita",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    label: "Upload Galeri",
    description: "Tambah foto & video kegiatan",
    icon: <ImagePlus size={20} />,
    href: "/galeri",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    label: "Tambah Partner",
    description: "Daftarkan mitra industri baru",
    icon: <Handshake size={20} />,
    href: "/partner",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Kelola PKL",
    description: "Atur lowongan & penempatan",
    icon: <BriefcaseBusiness size={20} />,
    href: "/pkl",
    iconBg: "bg-amber-100 text-amber-600",
  },
];

const performanceMetrics = [
  {
    label: "Kecepatan Situs",
    value: 94,
    color: "from-emerald-400 to-teal-500",
    icon: <Zap size={15} />,
  },
  {
    label: "SEO Score",
    value: 87,
    color: "from-blue-400 to-indigo-500",
    icon: <Globe size={15} />,
  },
  {
    label: "Uptime Server",
    value: 99,
    color: "from-violet-400 to-purple-500",
    icon: <Activity size={15} />,
  },
  {
    label: "Keamanan",
    value: 96,
    color: "from-amber-400 to-orange-500",
    icon: <Shield size={15} />,
  },
];

const contentSummary = [
  {
    label: "Hero Section",
    status: "published",
    updated: "3 hari lalu",
    icon: <Layers size={16} />,
  },
  {
    label: "Halaman About",
    status: "published",
    updated: "1 minggu lalu",
    icon: <FileText size={16} />,
  },
  {
    label: "FAQ",
    status: "draft",
    updated: "2 hari lalu",
    icon: <ClipboardList size={16} />,
  },
  {
    label: "Halaman Kontak",
    status: "published",
    updated: "1 bulan lalu",
    icon: <Globe size={16} />,
  },
];

/* ── Component ── */
export default function DashboardSection() {
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const now = new Date();
    const hour = now.getHours();
    const g =
      hour < 12
        ? "Selamat Pagi"
        : hour < 15
          ? "Selamat Siang"
          : hour < 18
            ? "Selamat Sore"
            : "Selamat Malam";
    setGreeting(g);

    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    setDateStr(
      `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
    );
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-12">
    
      {/* ═══════════════════════════════════════════
          SECTION 1 — Hero Welcome Banner
          ═══════════════════════════════════════════ */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-8 py-10 lg:px-10 lg:py-12"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-44 h-44 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            {/* Top row: icon + date + status */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <Sparkles size={22} className="text-amber-400" />
                </div>
                <div className="flex items-center gap-2 text-indigo-300/80 text-xs font-medium bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
                  <CalendarDays size={14} />
                  <span>{dateStr}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2.5 text-xs text-indigo-300/60 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sistem berjalan normal</span>
              </div>
            </div>

            {/* Greeting text */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
              {greeting},{" "}
              <span className="text-indigo-300">Admin</span> 👋
            </h2>
            <p className="text-indigo-200/50 text-sm mt-3 max-w-xl leading-relaxed">
              Kelola dan pantau semua aktivitas website SMK Vokasi dari
              dashboard ini. Semua data terupdate secara real-time.
            </p>

            {/* Mini stat pills */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                {
                  label: "Siswa Aktif",
                  value: "1,248",
                  icon: <Users size={15} />,
                },
                {
                  label: "Artikel",
                  value: "56",
                  icon: <Newspaper size={15} />,
                },
                {
                  label: "Partner",
                  value: "24",
                  icon: <Handshake size={15} />,
                },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-3.5 bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] rounded-xl px-5 py-3.5 hover:bg-white/[0.12] transition-colors duration-200"
                >
                  <div className="text-indigo-300/70">{pill.icon}</div>
                  <div>
                    <p className="text-[11px] text-indigo-300/50 font-medium uppercase tracking-wider leading-none">
                      {pill.label}
                    </p>
                    <p className="text-lg font-bold text-white leading-tight mt-1">
                      {pill.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ═══════════════════════════════════════════
          SECTION 2 — Statistik Overview
          ═══════════════════════════════════════════ */}
      <div>
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-7 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">
              Statistik Overview
            </h2>
            <span className="cms-badge cms-badge-blue">Live</span>
          </div>
          <p className="text-sm text-slate-400 hidden sm:block">
            Data ringkasan keseluruhan
          </p>
        </div>

        {/* Stat cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7"
        >
          {stats.map((stat) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Quick Actions + Performance
          ═══════════════════════════════════════════ tandai*/}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Quick Actions — 3 cols */}
        <Card
          className="lg:col-span-3"
          title="Aksi Cepat"
          subtitle="Fitur utama yang sering digunakan"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="group flex items-center gap-5 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${action.iconBg} group-hover:scale-110 transition-transform duration-200`}
                >
                  {action.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {action.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 truncate">
                    {action.description}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </Card>

        {/* Performance — 2 cols */}
        <Card
          className="lg:col-span-2"
          title="Performa Website"
          subtitle="Monitoring kesehatan situs"
        >
          <div className="flex flex-col gap-7">
            {performanceMetrics.map((metric, i) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-sm text-slate-600 flex items-center gap-2.5 font-medium">
                    <span className="text-slate-400">{metric.icon}</span>
                    {metric.label}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {metric.value}%
                  </span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.15,
                      ease: "easeOut" as const,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 4 — Activity + Content Summary
          ═══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Activity Timeline — 2 cols */}
        <Card
          className="lg:col-span-2"
          title="Aktivitas Terbaru"
          subtitle="Update terakhir dari semua modul"
          actions={
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Lihat Semua <ArrowUpRight size={14} />
            </a>
          }
        >
          <div className="flex flex-col relative">
            {/* Timeline line */}
            <div className="absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent" />

            {recentActivities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                className="relative flex items-start gap-5 py-5 first:pt-2 last:pb-2 transition-colors hover:bg-slate-50/60 -mx-2 px-3 rounded-lg group"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ring-2 ring-white ${activity.iconBg} group-hover:scale-110 transition-transform duration-200`}
                  >
                    {activity.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-slate-700">
                      {activity.text}
                    </p>
                    {activity.isNew && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600">
                        Baru
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-1">
                    {activity.detail}
                  </p>
                </div>

                {/* Time */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 flex-shrink-0 pt-1">
                  <Clock size={12} />
                  {activity.time}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Content Summary — 1 col */}
        <Card
          title="Ringkasan Konten"
          subtitle="Status halaman website"
          actions={
            <a
              href="/settings"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Kelola <ArrowUpRight size={14} />
            </a>
          }
        >
          <div className="flex flex-col gap-4">
            {contentSummary.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                className="group flex items-center justify-between p-5 rounded-xl bg-slate-50/70 border border-slate-100 transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700 truncate">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Update: {item.updated}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <Badge
                    variant={item.status === "published" ? "green" : "amber"}
                    dot
                  >
                    {item.status === "published" ? "Published" : "Draft"}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
