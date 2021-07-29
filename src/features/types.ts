export interface gameData {
  id?: string;
  name?: string;
  intro_text?: string;
  farewell_text?: string;
  time?: number;
}

export interface gamesListType extends Array<gameData> {}

export interface XinYprops {
  isPreset?: boolean;
  w1?: number;
  c1?: number;
  w2?: number;
  c2?: number;
}

export interface userData {
  id: string;
  name: string;
  email: string;
}

export interface Score {
  user_id: string;
  score: number;
  game_id: string;
}
