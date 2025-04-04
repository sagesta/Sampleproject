import { ResponsiveImage } from "@/utils/image";
import SideLink from "@/utils/side-links";
import Avatar from "../avatar";
import Text from "@/utils/text";
import HomeIcon from "../icons/home-icon";
import UsersIcon from "../icons/users-icon";
import KayakIcon from "../icons/kayak-icon";
import WalletIcon from "../icons/wallet-icon";
import CloudIcon from "../icons/cloud-icon";
import ChartIcon from "../icons/chart-icon";
import AdminIcon from "../icons/admin-icon";
import HelpIcon from "../icons/help-icon";
import SettingsIcon from "../icons/settings-icon";

interface Props {
  active: string;
}

const Sidebar = ({ active }: Props) => {
  const first = [
    { icon: <HomeIcon />, label: "Dashboard", link: "/dashboard" },
    { icon: <UsersIcon />, label: "Users", link: "/users" },
    { icon: <KayakIcon />, label: "Kayak House", link: "/kayak" },
    { icon: <WalletIcon />, label: "Subscriptions", link: "/subscriptions" },
  ];

  const second = [
    { icon: <CloudIcon />, label: "Integrations", link: "/integrations" },
    {
      icon: <ChartIcon />,
      label: "Analytics and Reports",
      link: "/analytics",
    },
    {
      icon: <AdminIcon />,
      label: "Admin Management",
      link: "/admins",
    },
  ];

  const third = [
    { icon: <HelpIcon />, label: "Help and Support", link: "/support" },
    { icon: <SettingsIcon />, label: "Settings", link: "/settings" },
  ];

  return (
    <div className="w-[272px] min-h-screen px-2 py-2 fixed top-0 left-0 z-30 border border-grey-400 flex flex-col justify-between overflow-y-auto">
      <div className="w-full flex flex-col items-center gap-6">
        <ResponsiveImage
          src="webp/logo.webp"
          alt="KayakLoop Logo"
          className="w-[236px] h-16"
        />

        <div className="w-full flex flex-col gap-1">
          {first.map((item) => (
            <SideLink
              active={active}
              icon={item.icon}
              label={item.label}
              link={item.link}
              key={item.label}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-1 pb-3 border-b border-grey-600">
          <div className="h-11 w-full px-4 py-3">
            <Text content="Reports" className="text-grey-500" type="sm" />
          </div>
          {second.map((item) => (
            <SideLink
              active={active}
              icon={item.icon}
              label={item.label}
              link={item.link}
              key={item.label}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-1 pb-3 border-b border-grey-600">
          <div className="h-11 w-full px-4 py-3">
            <Text content="Settings" className="text-grey-500" type="sm" />
          </div>
          {third.map((item) => (
            <SideLink
              active={active}
              icon={item.icon}
              label={item.label}
              link={item.link}
              key={item.label}
            />
          ))}
        </div>
      </div>

      <Avatar />
    </div>
  );
};

export default Sidebar;
