import { ReactNode } from "react";
import { cn } from "../utils/utils";

const ListTile: React.FC<ListTileProps> = ({
  leading,
  titleItem,
  trailing,
  className,
}: ListTileProps) => {
  return (
    <div
      className={cn(
        "flex justify-between dark:bg-navy rounded-3xl p-5 items-center w-full lg:max-w-prose bg-white",
        className
      )}
    >
      <div className="inline-flex gap-6 items-center">
        {leading}
        {titleItem}
      </div>
      {trailing}
    </div>
  );
};

interface ListTileProps extends React.HTMLAttributes<HTMLDivElement> {
  leading?: ReactNode;
  titleItem?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}

export default ListTile;
