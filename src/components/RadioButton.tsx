import { ReactNode } from "react";
import { AnswerState } from "../types/types";

const borderState = {
  plain: "peer-checked:border-purple",
  error: "peer-checked:border-error",
  success: "peer-checked:border-success",
};

const bgState = {
  plain: "",
  error: "show-error",
  success: "show-success",
};

const trailingIcon = {
  plain: "",
  error: "assets/images/icon-incorrect.svg",
  success: "assets/images/icon-correct.svg",
};

const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
  const border = borderState[props.state || "plain"];
  const bg = bgState[props.state || "plain"];
  const image = trailingIcon[props.state || "plain"];

  return (
    <div className={`group ${props.disabled && "pointer-events-none"}`}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        tabIndex={0}
        className="peer w-0 h-0 input"
        id={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.value}
        className={`flex items-center gap-4 cursor-pointer select-none rounded-3xl text-center bg-white dark:bg-navy text-lg md:text-2xl dark:text-white w-full border-[3px] text-darkNavy py-10 px-4 ${border} border-transparent`}
      >
        <span
          className={`group-hover:bg-lightPurple group-hover:text-purple text-greyNavy bg-lightGrey px-4 py-2  rounded-lg box ${bg}`}
        >
          {props.leading}
        </span>
        <span className="text-start">{props.value}</span>
        <span className="ml-auto">
          {props.state !== "plain" && (
            <img src={image} alt={props.state} className="w-10 h-10" />
          )}
        </span>
      </label>
    </div>
  );
};

interface RadioButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  leading?: ReactNode;
  trailing?: ReactNode;
  state?: AnswerState;
  showSuccess?: boolean;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default RadioButton;
