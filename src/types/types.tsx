export type Theme = "light" | "dark";

export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type QuizItemState = {
  currentQuestion: number;
  length: number;
  score: number;
  isComplete: boolean;
};

export type AnswerState = "plain" | "error" | "success";

export type HeadingProps = React.FC<
  {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    text?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>;

export type ParagraphProps = React.FC<
  {
    text?: string;
    className?: string;
    type?: "default" | "description" | AnswerState;
  } & React.HTMLAttributes<HTMLParagraphElement>
>;
