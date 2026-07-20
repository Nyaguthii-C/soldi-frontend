import api from "./api";

export const getMonthlySummary = (year, month) => {
    return api.get("/summary/monthly/", {
        params: {
            year,
            month,
        },
    });
};

// export const getCategorySummary = (year, month) => {
//     return api.get("/summary/categories/", {
//         params: {
//             year,
//             month,
//         },
//     });
// };