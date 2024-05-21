import Sidebar from "@/components/dashboard/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
