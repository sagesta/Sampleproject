import Input from "@/components/input/input";
import AuthLayout from "@/layout/auth";
import Button from "@/utils/button";
import { ResponsiveImage, StaticImage } from "@/utils/image";
import Text from "@/utils/text";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState<boolean>(false);

  function handleChange(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <AuthLayout>
      <div className="p-4 pb-14 lg:py-16 lg:px-8 xl:px-30 flex flex-col gap-6 lg:gap-8">
        <ResponsiveImage
          src="webp/logo.webp"
          alt="Logo"
          className="w-[236px] h-[92px]"
        />

        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <Text type="h2" content="Log In" className="text-black-100" />
            <Text
              content="Enter your credentials to access your account"
              className="text-grey-200"
            />
          </div>

          <div className="mt-2 w-full flex flex-col gap-6">
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter email"
              type="email"
              value={form.email}
              handleChange={(e) => handleChange(e.target.name, e.target.value)}
              icon={{
                hasIcon: true,
                element: (
                  <StaticImage
                    src="svg/email.svg"
                    width={20}
                    height={20}
                    alt="email"
                  />
                ),
              }}
            />

            <Input
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              value={form.password}
              handleChange={(e) => handleChange(e.target.name, e.target.value)}
            />

            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-5 w-5 border-grey-300 cursor-pointer"
                />

                <Text content="Remember me" type="label" />
              </div>

              <Link href="/forgot-password" className="text-sm text-orange-200">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <Button
              text="Log in"
              style="filled"
              handleClick={() => router.push("/dashboard")}
            />

            <div className="w-full flex items-center">
              <div className="w-full h-0.5 border border-[#F0F2F5]" />
              <p className="w-[34px] px-2 h-5 bg-white flex items-center justify-center text-sm text-grey-200">
                Or
              </p>
              <div className="w-full h-0.5 border border-[#F0F2F5]" />
            </div>

            <Button
              text="Continue with Google"
              style="border"
              icon={
                <StaticImage
                  src="svg/google.svg"
                  alt="google"
                  width={20}
                  height={20}
                />
              }
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Home;
