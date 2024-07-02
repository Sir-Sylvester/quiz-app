import { HeadingProps, ParagraphProps } from "../types/types";
import { cn } from "../utils/utils";

const Paragraph: ParagraphProps = ({ text, className, children, type }) => {
  const types = {
    default: "font-normal",
    description: "text-greyNavy dark:text-lightBluish font-RubikScribbleItalic",
    plain: "text-base",
    focused: "text-base",
    error: "text-base text-red-500",
    success: "text-base text-green-500",
  };

  className = types[type ?? "default"] + " " + className;

  return (
    <p className={cn("text-sm md:text-xl", className)}>
      {children ? children : text}
    </p>
  );
};

const Heading: HeadingProps = ({
  level,
  text,
  className,
  children,
  ...props
}) => {
  const Tag = level;

  return (
    <Tag className={cn("text-[40px] md:text-[64px]", className)} {...props}>
      {!children ? text : children}
    </Tag>
  );
};

export { Heading, Paragraph };
