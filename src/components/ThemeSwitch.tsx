import IconButton from "./IconButton";
import DarkSun from "/assets/images/icon-sun-dark.svg";
import LightSun from "/assets/images/icon-sun-light.svg";
import DarkMoon from "/assets/images/icon-moon-dark.svg";
import LightMoon from "/assets/images/icon-moon-light.svg";
import useTheme from "../hooks/useTheme";

function ThemeSwitch() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex gap-2 md:gap-3">
      <IconButton
        title="sun"
        srcDark={LightSun}
        srcLight={DarkSun}
        isDark={isDark}
      />
      <label htmlFor="">
        <input
          type="checkbox"
          checked={isDark}
          title="theme"
          onChange={toggleTheme}
        />
      </label>
      <IconButton
        title="moon"
        srcDark={LightMoon}
        srcLight={DarkMoon}
        isDark={isDark}
      />
    </div>
  );
}

export default ThemeSwitch;
