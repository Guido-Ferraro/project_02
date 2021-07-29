import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { gamesListApiSlice } from "../features/gamesAPI";
import incrementReducer from "./../features/scoreSlice";
import changeReducer from "./../features/intentSlice";
import setGameStateReducer from "./../features/gameStateSlice";
import countdownReducer from "./../features/timerSlice";

export const store = configureStore({
  reducer: {
    [gamesListApiSlice.reducerPath]: gamesListApiSlice.reducer,
    counter: incrementReducer,
    change: changeReducer,
    gameState: setGameStateReducer,
    countdown: countdownReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesListApiSlice.middleware),
});

/*store.subscribe(()=>{
	console.log(store.getState())
})*/

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
