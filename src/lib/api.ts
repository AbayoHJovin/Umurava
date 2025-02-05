import axios from "axios";

export const api = {
    get: async (endpoint: string) => {
        try {
            const response = await axios.get(`https://localhost:5000/api${endpoint}`);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch data");
        }
    },
    put: async (endpoint: string, data: any) => {
        try {
            const response = await axios.put(`https://localhost:5000/api${endpoint}`, data);
            return response.data;
        } catch (error) {
            throw new Error("Failed to update data");
        }
    },
};
