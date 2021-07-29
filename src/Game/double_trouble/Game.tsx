import Instructions from "./Instructions/Instructions";
import Start from "./Start/Start";
import ThankYou from "./ThankYou/ThankYou";
import { Switch, Route, useParams } from "react-router-dom";
import { useGetGameDataQuery } from "../../features/gamesAPI";
import { gameData } from "../../features/types";

const Game = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetGameDataQuery<{ data: gameData | undefined }>(id);

  if (data) {
    console.log("success");

    return (
      <>
        <Switch>
          <Route path={`/game/${id}/score`}>
            <ThankYou />
          </Route>

          <Route path={`/game/${id}/start`}>
            <Start id={id} />
          </Route>

          <Route path={`/game/${id}`}>
            <Instructions id={id} />
          </Route>
        </Switch>
      </>
    );
  } else {
    console.log("failure");
    return <div>Fetching data...</div>;
  }
};

export default Game;
