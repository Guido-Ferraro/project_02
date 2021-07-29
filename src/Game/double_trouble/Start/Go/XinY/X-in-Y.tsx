import { useAppDispatch, useAppSelector } from "./../../../../../app/hooks";
import { increment } from "./../../../../../features/scoreSlice";
import { change, fade1, fade2 } from "./../../../../../features/intentSlice";
import { setGameState } from "./../../../../../features/gameStateSlice";
import { useEffect } from "react";
import { countdown } from "../../../../../features/timerSlice";
import wrong from "./wrong.svg";

const XinY = () => {
  const dispatch = useAppDispatch();
  const { targetColor, targetWord, color1, word1, color2, word2 } =
    useAppSelector((state) => state.change);

  const color: string[] = ["#FF0000", "#0081FF"];
  const word: string[] = ["RED", "BLUE", ""];

  useEffect(() => {
    dispatch(setGameState());
    dispatch(countdown());
  }, []);

  const handleClick = (answer: 0 | 1 | 2, id: string, button: string) => {
    if (answer === targetColor) {
      dispatch(increment());
      dispatch(change());
    } else {
      const buttonLeft = document.getElementById(
        "button-left"
      ) as HTMLButtonElement;
      const buttonRight = document.getElementById(
        "button-right"
      ) as HTMLButtonElement;
      const wrongButton = document.getElementById(button) as HTMLButtonElement;
      const wrong = document.getElementById(id) as HTMLImageElement;

      wrong.style.opacity = "1";
      id === "wrong-answer-left" ? dispatch(fade1()) : dispatch(fade2());
      wrongButton.style.backgroundColor = "#BC96E6";

      buttonLeft.disabled = true;
      buttonRight.disabled = true;

      setTimeout(() => {
        wrong.style.opacity = "0";
        wrongButton.style.backgroundColor = "transparent";
      }, 400);

      setTimeout(() => {
        buttonLeft.disabled = false;
        buttonRight.disabled = false;
        dispatch(change());
      }, 600);
    }
  };

  return (
    <div className="XinY-component">
      <div
        className="example target word"
        style={{ color: color[targetColor] }}
      >
        {word[targetWord]}
      </div>

      <div className="button-pair">
        <button
          className="word left"
          type="button"
          style={{ color: color[color1] }}
          id="button-left"
          onClick={() => handleClick(word1, "wrong-answer-left", "button-left")}
        >
          {word[word1]}

          <img src={wrong} alt="wrong answer" id="wrong-answer-left" />
        </button>

        <button
          type="button"
          className="word right"
          style={{ color: color[color2] }}
          id="button-right"
          onClick={() =>
            handleClick(word2, "wrong-answer-right", "button-right")
          }
        >
          {word[word2]}

          <img src={wrong} alt="wrong answer" id="wrong-answer-right" />
        </button>
      </div>
    </div>
  );
};

export default XinY;
