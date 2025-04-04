import { StaticImage } from "@/utils/image";
import Text from "@/utils/text";
import { useRouter } from "next/router";

const Avatar = () => {
  const router = useRouter();

  return (
    <div className="w-full py-3 flex items-center justify-between gap-2.5">
      <div className="flex items-center gap-3">
        <StaticImage src="svg/avatar.svg" width={40} height={40} alt="Avatar" />

        <div>
          <Text
            content="David Richards"
            className="font-medium text-black-100"
            type="span"
          />
          <Text
            content="Davidr@kayakloop.no"
            className="text-grey-200"
            type="span"
          />
        </div>
      </div>

      <button
        className="cursor-pointer text-black-100"
        onClick={() => router.push("/")}
      >
        <StaticImage
          width={20}
          height={20}
          src="svg/sign-out.svg"
          alt="Sign out"
        />
      </button>
    </div>
  );
};

export default Avatar;
