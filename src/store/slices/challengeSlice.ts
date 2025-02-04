import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Challenge {
    id: string;
    title: string;
    description: string;
}

interface ChallengeState {
    open: Challenge[];
    ongoing: Challenge[];
    completed: Challenge[];
}

const initialState: ChallengeState = {
    open: [],
    ongoing: [],
    completed: [],
};

const challengeStateSlice = createSlice({
    name: "challengeState",
    initialState,
    reducers: {
        addChallenge: (state, action: PayloadAction<Challenge>) => {
            // By default, add to the open challenges
            state.open.push(action.payload);
        },
        startChallenge: (state, action: PayloadAction<string>) => {
            const challengeIndex = state.open.findIndex(
                (challenge) => challenge.id === action.payload
            );
            if (challengeIndex !== -1) {
                const [challenge] = state.open.splice(challengeIndex, 1);
                state.ongoing.push(challenge);
            }
        },
        completeChallenge: (state, action: PayloadAction<string>) => {
            const challengeIndex = state.ongoing.findIndex(
                (challenge) => challenge.id === action.payload
            );
            if (challengeIndex !== -1) {
                const [challenge] = state.ongoing.splice(challengeIndex, 1);
                state.completed.push(challenge);
            }
        },
        removeChallenge: (state, action: PayloadAction<{ id: string; status: "open" | "ongoing" | "completed" }>) => {
            const { id, status } = action.payload;
            if (status === "open") {
                state.open = state.open.filter((ch) => ch.id !== id);
            } else if (status === "ongoing") {
                state.ongoing = state.ongoing.filter((ch) => ch.id !== id);
            } else {
                state.completed = state.completed.filter((ch) => ch.id !== id);
            }
        },
    },
});

export const { addChallenge, startChallenge, completeChallenge, removeChallenge } = challengeStateSlice.actions;
export default challengeStateSlice.reducer;
