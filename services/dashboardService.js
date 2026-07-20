import { getBudget } from "./budgetService";
import { getTodayExpenses } from "./expenseService";
import { getMonthlySummary } from "./summaryService";

export async function getDashboardData() {

    const [budget, today, monthly] = await Promise.all([
        getBudget(),
        getTodayExpenses(),
        getMonthlySummary(),
    ]);

    return {
        budget: budget.data,
        today: today.data,
        monthly: monthly.data,
    };
}
