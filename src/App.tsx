import NavItems from "./components/NavItems";
import QuizData from "../src/data/data.json";
import { Heading, Paragraph } from "./components/Typography";
import Layout from "./components/layout/layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Heading className="flex flex-col" level="h1">
            <span className="font-light leading-[1]">Welcome to the</span>
            <span className="font-RubikScribbleBold leading-[1]">
              Frontend Quiz!
            </span>
          </Heading>

          <Paragraph type="description">
            Pick a subject to get started
          </Paragraph>
        </div>

        <NavItems quiz={QuizData["quizzes"]} />
      </div>
    </Layout>
  );
}

export default App;
