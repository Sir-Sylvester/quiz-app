function RectangularChip(props: RectangularChipProps) {
  const textColor = `text-${props.textColor || "white"}`;

  const color = `bg-${props.color || "blue"}`;

  return (
    <div
      className={`rounded-full px-2 py-1 ${color} ${textColor} flex items-center`}
    >
      {props.icon && (
        <img src={props.icon} alt={props.title} className="w-4 h-4" />
      )}
      <span>{props.title}</span>
    </div>
  );
}

interface RectangularChipProps {
  title?: string;
  icon?: string;
  color?: string;
  textColor?: string;
}

export default RectangularChip;
