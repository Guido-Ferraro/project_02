import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  value: boolean;
}

const initialState = { value: false } as GameState;

const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setGameState(state) {
      state.value = !state.value;
    },
  },
});

export const { setGameState } = gameStateSlice.actions;
export default gameStateSlice.reducer;
