import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import challengeReducer from "./slices/challengeSlice";

export const store = configureStore({
    reducer: {
        challenge: challengeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a typed `useAppDispatch` hook
export const useAppDispatch: () => AppDispatch = useDispatch;