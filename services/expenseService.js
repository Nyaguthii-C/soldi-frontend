import api from "./api";


// list all expenses **
export const getExpenses = () => {
    return api.get("/expenses/")
}

// log an expense/expenses
export const logExpenses = (data) => {
    return api.post("/expenses/log/", data);
};

// get expense by id(pk)
export const getExpenseById = (id) => {
    return api.get(`/expenses/${id}/`)
}

// get expenses - today
export const getTodayExpenses = () => {
    return api.get("/expenses/today/");
};

// update expense (pk)
export const updateExpenseById = (id, data) => {
    return api.patch(`/expenses/${id}/update/`, data)
}

// delete expense (pk)
export const deleteExpenseById = (id) => {
    return api.delete(`/expenses/${id}/delete/`,)
}
