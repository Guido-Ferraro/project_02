import { XinYprops } from "../../../../features/types";
import Group_3 from "./Group_3.svg";
import Group_5 from "./Group_5.svg";

const XinY = (props: XinYprops) => {
  let { isPreset, w1 = 0, c1 = 0, w2 = 0, c2 = 0 } = props;
  let display;
  if (!isPreset) {
    w1 = Math.round(Math.random());
    c1 = Math.round(Math.random());
    w2 = Math.round(Math.random());
    c2 = Math.round(Math.random());
    display = { display: "none" };
  } else {
    display = { display: "inline" };
  }

  const color = ["#FF0000", "#0081FF"];
  const word = ["RED", "BLUE"];

  const button2 = {
    word: c1 === w2 ? (c1 === 0 ? 1 : 0) : c1,
    color: c2 === 1 ? 0 : 1,
  };

  return (
    <>
      <div className="example target">
        <div style={{ color: color[c1] }} className="word">
          {word[w1]}
        </div>

        <small style={display} className="button-label">
          WORD IS IN BLUE COLOR
        </small>
      </div>

      <div className="button-pair">
        <div className="container left">
          <button
            type="button"
            disabled={isPreset}
            style={{ color: color[c2] }}
            className="word"
          >
            {word[w2]}
          </button>

          <small style={display} className="button-label">
            WRONG ANSWER
          </small>

          <img src={Group_3} alt="cross" style={display} className="left" />
        </div>

        <div className="container right">
          <button
            type="button"
            disabled={isPreset}
            style={{ color: color[button2.color] }}
            className="word"
          >
            {word[button2.word]}
          </button>

          <small style={display} className="button-label">
            CORRECT ANSWER
          </small>

          <img src={Group_5} alt="tick" style={display} className="right" />
        </div>
      </div>
    </>
  );
};

export default XinY;
