import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardSection from "./sections/dashboard/DashboardSection";

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardSection />
    </DashboardLayout>
  );
}