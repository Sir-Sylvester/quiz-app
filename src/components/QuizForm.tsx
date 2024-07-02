import { AnswerState } from "../types/types";
import RadioButton from "./RadioButton";
import { Paragraph } from "./Typography";

const QuizForm: React.FC<QuizFormProps> = ({ ...props }) => {
  return (
    <form {...props}>
      <div className="grid grid-rows-5 gap-6">
        {props.options.map((option, index) => {
          return (
            <div key={`${option}-${index}`}>
              <RadioButton
                value={option}
                tabIndex={0}
                name={`${props.currentQuestion}`}
                leading={
                  <p className="uppercase">{String.fromCharCode(97 + index)}</p>
                }
                state={props.state(option)}
                onChange={() => props.onAnswerSelected(option)}
                disabled={props.disabled}
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="bg-purple text-white font-bold py-4 px-8 rounded-lg mt-8 hover:bg-purple/70"
        >
          {props.submitted ? "Next Question" : "Submit"}
        </button>
        {props.error && (
          <div className="flex items-center justify-center">
            <img
              src="/assets/images/icon-error.svg"
              alt="error"
              className="w-6 h-6 mr-2"
            />
            <Paragraph type="error">{props.error}</Paragraph>
          </div>
        )}
      </div>
    </form>
  );
};

interface QuizFormProps extends React.HTMLAttributes<HTMLFormElement> {
  options: string[];
  currentQuestion: number;
  onAnswerSelected: (option: string) => void;
  state: (option: string) => AnswerState;
  disabled: boolean;
  submitted: boolean;
  error: string | null;
}

export default QuizForm;
