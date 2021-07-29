import { useHistory } from "react-router-dom";
import Group_11 from "./Group_11.svg";
import Group_14 from "./Group_14.svg";
import { useEffect } from "react";

const Set = (props: { id: string }) => {
  const history = useHistory();
  setTimeout(() => {
    history.push(`/game/${props.id}/start/go`);
  }, 7000);

  useEffect(() => {
    const countdownElements = Array.from(
      document.getElementsByClassName(
        "countdownElement"
      ) as HTMLCollectionOf<HTMLElement>
    );
    countdownElements.forEach((element: HTMLElement, index: number) => {
      if (index % 2) {
        element.style.animation =
          "0.8s countdownAnimation forwards ease-in-out";
        element.style.animationDelay = (index * 0.8 + 0.4).toString() + "s";
      } else {
        element.style.animation =
          "1.6s countdownAnimation forwards ease-in-out";
        element.style.animationDelay = (index * 0.8 + 0.8).toString() + "s";
      }
    });
  }, []);

  return (
    <div className="Set-component">
      <div className="countdownElement initial">
        <div className="countdown-margin"></div>
        <div className="number countdown three">3</div>
      </div>

      <div className="countdownElement">
        <img src={Group_11} alt="number accent" className="number accent" />
        <div className="countdown-margin"></div>
        <div className="number countdown three">3</div>
      </div>

      <div className="countdownElement">
        <div className="countdown-margin"></div>
        <div className="number countdown two">2</div>
      </div>

      <div className="countdownElement">
        <img src={Group_11} alt="number accent" className="number accent" />
        <div className="countdown-margin"></div>
        <div className="number countdown two">2</div>
      </div>

      <div className="countdownElement">
        <div className="countdown-margin"></div>
        <div className="number countdown one">1</div>
      </div>

      <div className="countdownElement">
        <img src={Group_11} alt="number accent" className="number accent" />
        <div className="countdown-margin"></div>
        <div className="number countdown one">1</div>
      </div>

      <div className="countdownElement">
        <div className="go-margin"></div>
        <div className="countdown go">Go!</div>
      </div>

      <div className="countdownElement">
        <img src={Group_14} alt="go accent" className="go accent" />
        <div className="go-margin"></div>
        <div className="countdown go">Go!</div>
      </div>
    </div>
  );
};

export default Set;
