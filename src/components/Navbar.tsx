import ThemeSwitch from "./ThemeSwitch";
import { NavItem } from "./NavItems";
import { Quiz } from "../types/types";

function Navbar({ title, icon }: Partial<Quiz>) {
  return (
    <header className="">
      <nav className="flex justify-between items-center">
        <ul>
          <li>
            {title && icon && (
              <NavItem
                className="p-0 bg-inherit dark:bg-inherit"
                to=""
                title={title}
                icon={icon}
              />
            )}
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}

export default Navbar;
