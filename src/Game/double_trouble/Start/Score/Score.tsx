import { useAppSelector } from "./../../../../app/hooks";

const Score = () => {
  const score = useAppSelector((state) => state.counter.value);
  return (
    <div className="score-container">
      <label htmlFor="score" className="score-label">
        SCORE
      </label>
      <div id="score" className="score">
        {score}
      </div>
    </div>
  );
};

export default Score;
