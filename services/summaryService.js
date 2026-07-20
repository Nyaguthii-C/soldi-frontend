import api from "./api";

export const getMonthlySummary = () => {
    return api.get("/summary/monthly/");
};
