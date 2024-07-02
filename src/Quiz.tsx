import { useLoaderData } from "react-router-dom";
import { AnswerState, Quiz, QuizItemState } from "./types/types";
import { defaultQuizState } from "./consts/consts";
import { Heading, Paragraph } from "./components/Typography";
import useSessionStorage from "./hooks/useSessionStorage";
import { FormEvent, useEffect, useState } from "react";
import Layout from "./components/layout/layout";
import Navbar from "./components/Navbar";
import QuizForm from "./components/QuizForm";
import ScoreBoard from "./components/ScoreBoard";

function TakeQuiz() {
  const data = useLoaderData() as Quiz;
  const [quizState, setQuizState, clear] = useSessionStorage<QuizItemState>(
    `quiz-${data.title}`,
    { ...defaultQuizState, length: data.questions.length }
  );
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { currentQuestion, length } = quizState;

  const isFinished = currentQuestion + 1 <= length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);
    const answer = data["questions"][currentQuestion].answer;

    if (submitted) {
      setCorrectAnswer(answer);

      const newQuizState = {
        ...quizState,
        currentQuestion: currentQuestion + 1,
        isComplete: false,
      };

      setQuizState(newQuizState);
      setSubmitted(false);
      setDisabled(false);
      setCorrectAnswer(null);
      setChosenAnswer(null);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const selectedAnswer = formData.get(`${currentQuestion}`);

    if (!selectedAnswer) {
      setError("Please select an answer.");
      setDisabled(false);
      return;
    }

    setCorrectAnswer(data["questions"][currentQuestion].answer);
    setSubmitted(true);

    const newQuizState = {
      ...quizState,
      score: chosenAnswer === answer ? quizState.score + 1 : quizState.score,
      isComplete: true,
    };

    setQuizState(newQuizState);
  }

  useEffect(() => {
    if (quizState.isComplete) {
      const newQuizState = {
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        isComplete: false,
      };

      setQuizState(newQuizState);
    }
  }, []);

  function state(option: string): AnswerState {
    if (correctAnswer === null) {
      return "plain";
    }

    if (chosenAnswer === null) {
      return "plain";
    }

    if (chosenAnswer !== option && chosenAnswer !== null) {
      if (option === correctAnswer) {
        return "success";
      }
      return "plain";
    }

    if (option === correctAnswer) {
      return "success";
    }

    return "error";
  }

  function clearError() {
    setError(null);
  }

  return (
    <Layout>
      <div className="max-h-24">
        <Navbar title={data.title} icon={data.icon} />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {isFinished ? (
          <div>
            <Paragraph type="description">
              Question {currentQuestion + 1} of {length}
            </Paragraph>
            <Paragraph className="text-xl md:text-4xl">
              {data["questions"][currentQuestion].question}
            </Paragraph>
          </div>
        ) : (
          <div>
            <Heading className="flex flex-col" level="h1">
              <span className="font-light leading-[1]">Quiz completed</span>
              <span className="font-RubikScribbleBold leading-[1]">
                You scored...
              </span>
            </Heading>
          </div>
        )}
        {isFinished ? (
          <QuizForm
            onSubmit={handleSubmit}
            onChange={clearError}
            currentQuestion={currentQuestion}
            options={data["questions"][currentQuestion].options}
            onAnswerSelected={setChosenAnswer}
            state={state}
            disabled={disabled}
            submitted={submitted}
            error={error}
          />
        ) : (
          <ScoreBoard score={quizState.score} length={length} onExit={clear} />
        )}
      </div>
    </Layout>
  );
}

export default TakeQuiz;
