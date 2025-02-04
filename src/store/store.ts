import { configureStore } from "@reduxjs/toolkit";
import challengeStateReducer from "./slices/challengeSlice";

export const store = configureStore({
    reducer: {
        challengeState: challengeStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
