import { QuizItemState } from "../types/types";

export const QuizTitleColors: Record<string, string> = {
  HTML: "bg-[#FFF1E9]",
  CSS: "bg-[#E0FDEF]",
  JavaScript: "bg-[#EBF0FF]",
  Accessibility: "bg-[#F6E7FF]",
};

export const defaultQuizState: QuizItemState = {
  length: 0,
  currentQuestion: 0,
  score: 0,
  isComplete: false,
};
