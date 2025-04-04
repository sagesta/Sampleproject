import Text from "@/utils/text";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: {
    hasIcon?: boolean;
    element?: React.ReactNode;
  };
}

const Input = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  handleChange,
  icon = { hasIcon: false },
}: Props) => {
  const [view, setView] = useState("password");

  return (
    <div className="w-full flex flex-col gap-1">
      <Text content={label} type="label" />

      <div className="relative w-full h-14 ">
        <input
          name={name}
          type={type === "password" ? view : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)}
          className="w-full h-14 rounded-md pl-4 pr-12 border border-grey-300 outline-none focus:border-orange-100 text-sm placeholder:text-grey-200 text-black-100"
        />

        {icon.hasIcon && type !== "password" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {icon.element}
          </div>
        )}

        {type === "password" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-200">
            {view === "password" ? (
              <button
                className="cursor-pointer"
                onClick={() => setView("text")}
              >
                <BsEyeSlash size={20} />
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => setView("password")}
              >
                <BsEye size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
