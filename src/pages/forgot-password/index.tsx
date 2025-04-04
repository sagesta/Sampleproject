import Input from "@/components/input/input";
import AuthLayout from "@/layout/auth";
import Button from "@/utils/button";
import { ResponsiveImage, StaticImage } from "@/utils/image";
import Text from "@/utils/text";
import Link from "next/link";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <AuthLayout>
      <div className="p-4 pb-14 lg:py-16 lg:px-8 xl:px-30 flex flex-col gap-8">
        <ResponsiveImage
          src="webp/logo.webp"
          alt="Logo"
          className="w-[236px] h-[92px]"
        />

        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <Text
              type="h2"
              content="Forgot Password?"
              className="text-black-100"
            />
            <Text
              content="Enter the email associated with your account and we will send you a link to reset your password"
              className="text-grey-200"
            />
          </div>

          <div className="mt-2 w-full flex flex-col gap-6">
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter email"
              type="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
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

            <Button text="Reset Password" style="filled" />

            <div className="w-full flex items-center justify-center">
              <Link href="/" className="text-blue-100 font-bold">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
