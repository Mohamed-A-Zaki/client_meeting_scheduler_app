import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
