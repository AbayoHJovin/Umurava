import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/lib/api";

// Challenge type
interface Challenge {
    id: string;
    title: string;
    deadline: string;
    duration: string;
    moneyPrize: string;
    contactEmail: string;
    projectBrief: string;
    projectDescription: string;
    requirements: string;
    deliverables: string;
    challengeStatus: string; // added challengeStatus field
    [key: string]: string; // Allow dynamic string keys
}

interface ChallengeState {
    challenges: Challenge[]; // Changed from a single challenge to an array of challenges
    loading: boolean;
    error: string | null;
    selectedChallenge: Challenge | null;  // State for selected challenge
}

// Initial state
const initialState: ChallengeState = {
    challenges: [],
    loading: false,
    error: null,
    selectedChallenge: null,
};

// Async thunk to fetch all challenges
const fetchChallenges = createAsyncThunk("challenges/fetchChallenges", async () => {
    const response = await api.get("/challenges");
    return response.data;
});

// Async thunk to fetch a single challenge by ID
const fetchChallenge = createAsyncThunk("challenge/fetchChallenge", async (id: string) => {
    const response = await api.get(`/challenges/${id}`);
    return response.data;
});

// Async thunk to update challenge details
const updateChallenge = createAsyncThunk(
    "challenge/updateChallenge",
    async (updatedChallenge: Challenge) => {
        const response = await api.put(`/challenges/${updatedChallenge.id}`, updatedChallenge);
        return response.data;
    }
);

// Redux slice
const challengeSlice = createSlice({
    name: "challenges",
    initialState,
    reducers: {
        updateChallengeField: (state, action: PayloadAction<{ field: string; value: string }>) => {
            if (state.selectedChallenge) {
                state.selectedChallenge[action.payload.field] = action.payload.value;
            }
        },
        setSelectedChallenge: (state, action: PayloadAction<Challenge>) => {
            state.selectedChallenge = action.payload;
        },
        clearSelectedChallenge: (state) => {
            state.selectedChallenge = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch all challenges
        builder
            .addCase(fetchChallenges.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallenges.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
                state.challenges = action.payload;
                state.loading = false;
            })
            .addCase(fetchChallenges.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenges";
            });

        // Fetch single challenge
        builder
            .addCase(fetchChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChallenge.fulfilled, (state, action: PayloadAction<Challenge>) => {
                state.selectedChallenge = action.payload;
                state.loading = false;
            })
            .addCase(fetchChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch challenge";
            });

        // Update challenge
        builder
            .addCase(updateChallenge.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateChallenge.fulfilled, (state, action: PayloadAction<Challenge>) => {
                const index = state.challenges.findIndex((challenge) => challenge.id === action.payload.id);
                if (index !== -1) {
                    state.challenges[index] = action.payload;  // Update the challenge in the list
                }
                if (state.selectedChallenge && state.selectedChallenge.id === action.payload.id) {
                    state.selectedChallenge = action.payload;  // Update the selected challenge
                }
                state.loading = false;
            })
            .addCase(updateChallenge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to update challenge";
            });
    },
});

export const { updateChallengeField, setSelectedChallenge, clearSelectedChallenge } = challengeSlice.actions;
export { fetchChallenges, fetchChallenge, updateChallenge };

export default challengeSlice.reducer;
