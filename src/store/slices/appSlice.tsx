import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
   Light = 'light',
   Dark = 'dark',
}

export enum Language {
   EN = 'en',
   FR = 'fr',
}

export interface AppState {
   theme: Theme;
   language: Language;
}

const INITIAL_STATE = {
   theme: Theme.Light,
   language: Language.EN,
} as AppState;

const appSlice = createSlice({
   name: 'app',
   initialState: INITIAL_STATE,
   reducers: {
      setTheme: (state, action: PayloadAction<Theme>) => {
        console.log('appSlice: setTheme: action payload=> ', action.payload)
         state.theme = action.payload;
      },
      setLanguage: (state, action: PayloadAction<Language>) => {
         state.language = action.payload;
      },
   },
});

export const { setTheme, setLanguage } = appSlice.actions;

export default appSlice.reducer;