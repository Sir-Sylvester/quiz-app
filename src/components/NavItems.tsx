import { Link } from "react-router-dom";
import { QuizTitleColors } from "../consts";
import { Quiz } from "../types/types";
import ListTile from "./ListTile";
import QuizIcon from "./QuizIcon";
import { HTMLAttributes } from "react";

function NavItems({ quiz }: { quiz: Quiz[] }) {
  return (
    <div className="grid grid-rows-4 gap-6 w-full">
      {quiz.map((q, i) => (
        <NavItem to={q.title} key={i} title={q.title} icon={q.icon} />
      ))}
    </div>
  );
}

export default NavItems;

export const NavItem: React.FC<NavItemProps> = ({
  title,
  icon,
  to,
  className,
}) => {
  const backgroundColor = QuizTitleColors[title] ?? "bg-[#FFF1E9]";

  return (
    <Link to={`/${to}`}>
      <ListTile
        leading={<QuizIcon className={backgroundColor} icon={icon} />}
        titleItem={
          <span className="text-2xl font-RubikScribbleBold">{title}</span>
        }
        className={className}
      />
    </Link>
  );
};

interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  icon: string;
  to: string;
  className?: string;
}
