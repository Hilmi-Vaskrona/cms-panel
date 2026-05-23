"use client";

import PageHeader from "@/app/components/ui/PageHeader";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import { Plus, Edit2, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { id: 1, question: "Apa saja program keahlian yang tersedia?", answer: "Kami menyediakan 8 program keahlian termasuk TJKT, RPL, DKV, MPLB, AKL, TKR, dan lainnya.", category: "Akademik" },
  { id: 2, question: "Bagaimana cara mendaftar sebagai siswa baru?", answer: "Pendaftaran dilakukan secara online melalui halaman pendaftaran di website resmi kami.", category: "Pendaftaran" },
  { id: 3, question: "Apakah ada program PKL / magang?", answer: "Ya, kami memiliki kerja sama dengan lebih dari 24 perusahaan untuk program PKL.", category: "PKL" },
  { id: 4, question: "Berapa biaya pendidikan?", answer: "Informasi biaya pendidikan dapat dilihat di brosur resmi atau menghubungi bagian administrasi.", category: "Umum" },
  { id: 5, question: "Apakah lulusan mendapat sertifikasi?", answer: "Ya, lulusan mendapatkan sertifikasi kompetensi dari BNSP dan sertifikasi industri.", category: "Akademik" },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="FAQ"
        description="Kelola pertanyaan yang sering diajukan"
        badge={`${faqs.length} Pertanyaan`}
        actions={<Button icon={<Plus size={16} />}>Tambah FAQ</Button>}
      />

      <Card padding="none" className="overflow-hidden">
        <div className="divide-y divide-slate-100">
          {faqs.map((faq) => (
            <div key={faq.id} className="group transition-colors">
              <div
                className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors ${openId === faq.id ? "bg-blue-50/40" : "hover:bg-slate-50/60"
                  }`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Badge variant="gray">{faq.category}</Badge>
                  <span className="text-sm font-medium text-slate-700 truncate">{faq.question}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <Edit2 size={14} />
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className={`transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""}`}>
                    <ChevronDown size={16} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ${openId === faq.id ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-5 pl-[76px]">
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
