import Dots from "@/components/dots";
import { ResponsiveImage } from "@/utils/image";
import Text from "@/utils/text";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2 bg-grey-100">
      <div className="w-full flex flex-col items-center gap-10 justify-center bg-blue-100 pt-4 pb-16 px-4 lg:py-0 lg:px-12 xl:px-16">
        <ResponsiveImage
          src="webp/login-img.webp"
          alt="Login"
          className="w-full h-[340px] lg:h-[530px]"
        />

        <Text
          type="h3"
          content="Gain complete control over your inventory, bookings, and customer data"
          className="text-center text-white"
        />

        <Dots />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
