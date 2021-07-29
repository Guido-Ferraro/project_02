import { Link, useHistory } from "react-router-dom";
import defaulticon from "./defaulticon.svg";
import hover from "./hover.svg";

const Ready = (props: { id: string }) => {
  const { id } = props;

  const history = useHistory();

  const handleClick = () => {
    return history.push(`/game/${id}/start/set`);
  };
  return (
    <div className="Ready-component">
      <button type="button" onClick={() => handleClick()} className="button">
        <img className="hover" src={hover} alt="play" />
        <img className="default" src={defaulticon} alt="play" />
      </button>
      <label className="button-label">Start the game</label>
      <Link to={`/game/${id}`} className="instructions">
        Instructions
      </Link>
    </div>
  );
};

export default Ready;
