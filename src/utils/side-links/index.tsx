import Link from "next/link";

interface Props {
  active: string;
  link: string;
  label: string;
  icon: React.ReactNode;
}

const SideLink = ({ active, link, label, icon }: Props) => {
  return (
    <Link
      href={link}
      className={`w-full h-11 px-4 flex items-center gap-3 rounded ${
        active === label
          ? "bg-blue-200 text-blue-100 cursor-default"
          : "text-grey-200 cursor-pointer"
      }`}
    >
      {icon}
      <p className="text-sm font-medium">{label}</p>
    </Link>
  );
};

export default SideLink;
