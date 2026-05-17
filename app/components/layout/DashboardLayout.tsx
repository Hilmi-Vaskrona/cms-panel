import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 bg-slate-100">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </section>
    </main>
  );
}