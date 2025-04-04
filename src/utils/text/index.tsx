interface Props {
  type?: "h1" | "h2" | "h3" | "span" | "label" | "sm" | "p";
  content: string;
  className?: string;
}

const Text = ({ type = "p", content, className }: Props) => {
  if (type === "h1") return <h1 className={`${className}`}>{content}</h1>;

  if (type === "h2")
    return (
      <h2 className={`text-2xl md:text-[28px] font-bold ${className}`}>
        {content}
      </h2>
    );

  if (type === "h3")
    return <h3 className={`md:text-2xl font-bold ${className}`}>{content}</h3>;

  if (type === "label")
    return (
      <label className={`text-sm font-medium text-black-100 ${className}`}>
        {content}
      </label>
    );

  if (type === "sm") return <p className={`text-sm ${className}`}>{content}</p>;

  if (type === "span")
    return <p className={`text-xs ${className}`}>{content}</p>;

  return <p className={`${className}`}>{content}</p>;
};

export default Text;
