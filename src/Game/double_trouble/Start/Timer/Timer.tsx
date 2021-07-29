/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { countdown, initial } from "../../../../features/timerSlice";
import {
  useSubmitScoreMutation,
  useGetUserDataQuery,
} from "../../../../features/gamesAPI";

//import { userData } from "../../../../features/types"

const Timer = (props: { time: number; play: boolean; id: string }) => {
  const { time, play, id } = props;
  const history = useHistory();
  const timer = useAppSelector((state) => state.countdown.value) as number;
  const dispatch = useAppDispatch();

  const score = useAppSelector((state) => state.counter.value) as number;
  useGetUserDataQuery();
  const userId = useGetUserDataQuery().data?.id;

  const [submitScore] = useSubmitScoreMutation();

  useEffect(() => {
    dispatch(initial(time));
  }, []);

  useEffect(() => {
    if (play && timer >= 1) {
      setTimeout(() => {
        dispatch(countdown());
      }, 1000);
    } else if (play && timer <= 0) {
      submitScore({
        user_id: userId,
        score,
        game_id: id,
      });
      history.push(`/game/${id}/score`);
    }
  }, [timer]);

  return (
    <div className="timer-container">
      <div className="outer bar left">
        <div
          className="inner bar left"
          id="bar"
          style={{ height: `calc(${(100 * timer) / time}% + 8px)` }}
        />
      </div>

      <label htmlFor="time-left" className="time-left-label">
        TIME
      </label>

      <div className="time-left" id="time-left">
        {timer}
      </div>
    </div>
  );
};

export default Timer;
