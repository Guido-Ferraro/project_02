import { createSlice } from "@reduxjs/toolkit";

interface Pattern {
  targetWord: 0 | 1 | 2;
  targetColor: 0 | 1;
  word1: 0 | 1 | 2;
  color1: 0 | 1;
  word2: 0 | 1 | 2;
  color2: 0 | 1;
}

const initialState = {
  targetWord: Math.round(Math.random()),
  targetColor: Math.round(Math.random()),
  word1: 0,
  color1: Math.round(Math.random()),
  word2: 1,
  color2: Math.round(Math.random()),
} as Pattern;

const changeSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    change(state) {
      state.targetWord = Math.round(Math.random()) as 0 | 1;
      state.targetColor = Math.round(Math.random()) as 0 | 1;
      state.word1 = Math.round(Math.random()) as 0 | 1;
      state.color1 = Math.round(Math.random()) as 0 | 1;
      state.word2 = [0, 1].filter((item) => item !== state.word1)[0] as 0 | 1;
      state.color2 = Math.round(Math.random()) as 0 | 1;
    },
    fade1(state) {
      state.word1 = 2;
    },
    fade2(state) {
      state.word2 = 2;
    },
  },
});

export const { change, fade1, fade2 } = changeSlice.actions;
export default changeSlice.reducer;
