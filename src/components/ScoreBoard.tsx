const ScoreBoard: React.FC<ScoreBoardProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col min-h-[60svh]" {...props}>
      <div className="grow flex-1 bg-white text-darkNavy text-center flex flex-col justify-center rounded-2xl">
        <p className="font-bold text-[88px] md:text-[144px]">{props.score}</p>
        <p className="text-lg md:text-2xl">out of {props.length}</p>
      </div>
      <a
        href="/"
        onClick={props.onExit}
        className="bg-purple text-white font-bold py-4 px-8 rounded-lg mt-8 hover:bg-purple/70 text-center"
      >
        Play Again
      </a>
    </div>
  );
};

interface ScoreBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  length: number;
  onExit: () => void;
}

export default ScoreBoard;
