interface Props {
  text: string;
  type?: "button" | "submit";
  style: "filled" | "border";
  filledClass?: string;
  borderClass?: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
}

const Button = ({
  text,
  type = "button",
  style,
  filledClass,
  borderClass,
  handleClick,
  icon,
}: Props) => {
  return (
    <button
      className={`h-12 rounded-[48px] w-full cursor-pointer flex items-center justify-center gap-4 ${
        style === "filled" && `bg-blue-100 text-white font-bold ${filledClass}`
      } ${style === "border" && `border border-blue-100 text-black-100 font-bold ${borderClass}`}`}
      type={type}
      onClick={handleClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
