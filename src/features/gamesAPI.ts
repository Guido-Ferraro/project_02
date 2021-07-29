import { RootState } from "./../app/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gameData, gamesListType, userData, Score } from "./types";

export const gamesListApiSlice = createApi({
  reducerPath: "gamesListApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0",
  }),

  endpoints: (builder) => ({
    getGamesList: builder.query<gamesListType, void>({
      query: () => `/game`,
    }),
    getGameData: builder.query<gameData, string>({
      query: (id) => `/game/${id}`,
    }),
    getUserData: builder.query<userData, void>({
      query: () => `/user`,
    }),
    submitScore: builder.mutation<Score, Partial<Score>>({
      query(body) {
        return {
          url: `/score`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetGamesListQuery,
  useGetGameDataQuery,
  useGetUserDataQuery,
  useSubmitScoreMutation,
} = gamesListApiSlice;
export const selectGameDataById = (state: RootState) =>
  state.gamesListApi.queries.getGameData;
