import "./ThankYou.css";
import { useAppSelector } from "./../../../app/hooks";

const ThankYou = () => {
  const score = useAppSelector((state) => state.counter.value);

  return (
    <div className="ThankYou-component">
      <h1 className="thank-you">Thank you!</h1>
      <h2 className="final-score">Your score is {score}</h2>
      <small className="message">
        We will reach you as soon as we carefully review your interview.
      </small>
    </div>
  );
};

export default ThankYou;
