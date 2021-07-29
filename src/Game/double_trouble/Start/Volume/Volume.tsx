import soundon from "./soundon.svg";
import soundoff from "./soundoff.svg";

const Volume = () => {
  const handleClick = (): void => {
    const soundOn = document.getElementById("sound-on") as HTMLImageElement;
    const soundOff = document.getElementById("sound-off") as HTMLImageElement;

    soundOn.style.transition = "300ms";
    soundOff.style.transition = "300ms";

    if (soundOn.style.opacity === "0" || soundOn.style.opacity === "") {
      soundOn.style.opacity = "1";
      soundOff.style.opacity = "0";
    } else {
      soundOn.style.opacity = "0";
      soundOff.style.opacity = "1";
    }
  };

  return (
    <div className="volume-container">
      <button type="button">
        <img src={soundon} alt="sound on" className="sound-on" id="sound-on" />
        <img
          src={soundoff}
          alt="sound off"
          id="sound-off"
          onClick={() => handleClick()}
        />
      </button>
    </div>
  );
};

export default Volume;
