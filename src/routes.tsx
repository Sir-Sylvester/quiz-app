import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Quiz from "./Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":id",
    element: <Quiz />,
    loader: async ({ params }) => {
      const { id } = params;

      if (!id) throw new Error(`Quiz ID not provided!`);

      const quizzes = (await import(`./data/data.json`))["quizzes"];

      const quiz = quizzes.filter((quiz) => quiz.title === id)[0];

      if (!quiz) throw new Error(`Quiz with ID ${id} not found!`);

      return quiz;
    },
    errorElement: <h1>404 Not Found</h1>,
  },
]);

export default router;
