import { AnswerState } from "../types/types";
import { cn } from "../utils/utils";

const QuizIcon: React.FC<QuizIconProps> = ({
  title,
  icon,
  answerState,
  className,
}) => {
  if (!title && !icon) return null;

  const colors = {
    plain: "bg-transparent",
    focused: "bg-purple",
    error: "bg-error",
    success: "bg-success",
  };

  const bgColor = colors[answerState || "plain"];

  return (
    <div
      className={cn(
        `${bgColor} w-12 h-12 rounded-lg flex items-center justify-center p-2`,
        className
      )}
    >
      {icon && (
        <img src={icon} alt={title} className="w-auto h-auto object-contain" />
      )}

      {title && <span>{title}</span>}
    </div>
  );
};

interface QuizIconProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: string;
  answerState?: AnswerState;
}

export default QuizIcon;
