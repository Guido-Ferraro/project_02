import Ready from "./Ready/Ready";
import Set from "./Set/Set";
import Go from "./Go/Go";
import Timer from "./Timer/Timer";
import Volume from "./Volume/Volume";
import Score from "./Score/Score";
import { Switch, Route } from "react-router";
import { useGetGameDataQuery } from "../../../features/gamesAPI";
import { gameData } from "../../../features/types";
import "./Start.css";
import { useAppSelector } from "../../../app/hooks";

const Start = (props: { id: string }) => {
  const { id } = props;
  const { data } = useGetGameDataQuery<{ data: gameData }>(props.id);
  const { time = 0 } = data;
  const play = useAppSelector((state) => state.gameState.value);
  return (
    <div className="start-screen">
      <div className="main-container">
        <Switch>
          <Route path={`/game/${id}/start/go`}>
            <Go />
          </Route>

          <Route path={`/game/${id}/start/set`}>
            <Set id={id} />
          </Route>

          <Route path={`/game/${id}/start/`}>
            <Ready id={id} />
          </Route>
        </Switch>
      </div>

      <aside className="HUD-container">
        <Timer time={time} play={play} id={id} />
        <Score />
        <Volume />
      </aside>
    </div>
  );
};

export default Start
