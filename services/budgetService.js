import api from "./api";

export const getBudget = () => {
    return api.get("/budget/");
};
