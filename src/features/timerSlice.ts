import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Timer {
  value: number;
}

const initialState = { value: 0 } as Timer;

const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    countdown(state) {
      state.value--;
    },
    initial(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { countdown, initial } = countdownSlice.actions;
export default countdownSlice.reducer;
