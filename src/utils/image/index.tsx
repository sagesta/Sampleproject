import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

interface SizeProps extends Props {
  width: number;
  height: number;
}

const ResponsiveImage = ({ className, src, alt }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={`/assets/${src}`}
        alt={alt}
        fill
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

const StaticImage = ({ className, src, alt, width, height }: SizeProps) => {
  return (
    <Image
      src={`/assets/${src}`}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      className={className}
    />
  );
};

export { StaticImage, ResponsiveImage };
