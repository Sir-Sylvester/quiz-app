import { ButtonHTMLAttributes } from "react";

interface IconButtonProps {
  title?: string;
  src?: string;
  srcLight?: string;
  srcDark?: string;
  alt?: string;
  isDark?: boolean;
}

const IconButton: React.FC<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, srcLight, srcDark, alt, isDark }) => {
  return (
    <button type="button" title={title} className="">
      <img
        src={isDark ? srcDark : srcLight}
        alt={alt || title}
        className="w-6 h-6"
      />
    </button>
  );
};

export default IconButton;
