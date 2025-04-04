import Sidebar from "@/components/sidebar";

interface Props {
  active: string;
  children: React.ReactNode;
}

const DashboardLayout = ({ active, children }: Props) => {
  return (
    <div className="w-full h-screen grid grid-cols-[272px_auto] overflow-y-hidden">
      <div className="w-full relative">
        <Sidebar active={active} />
      </div>

      <div className="w-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
