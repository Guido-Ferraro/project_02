import Home from "./Home/Home";
import Game from "./Game/double_trouble/Game";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/game/:id">
        <Game />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
