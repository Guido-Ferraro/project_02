import { Link } from "react-router-dom";
import { useGetGameDataQuery } from "../../../features/gamesAPI";
import XinY from "./XinY/X-in-Y";
import { gameData } from "../../../features/types";
import "./Instructions.css";

const Instructions = (props: { id: string }) => {
  const { data } = useGetGameDataQuery<{ data: gameData }>(props.id);
  const { id, intro_text } = data;

  return (
    <div className="instructions-screen">
      <h1 className="title">Instructions</h1>
      <p className="intro-text">{intro_text}</p>
      <XinY isPreset={true} w1={0} c1={1} w2={0} c2={1} />
      <Link className="continue-button" to={`/game/${id}/start`}>
        I understand
      </Link>
    </div>
  );
};

export default Instructions;
