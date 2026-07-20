import { getBudget } from "./budgetService";
import { getTodayExpenses } from "./expenseService";
import { getMonthlySummary } from "./summaryService";

export async function getDashboardData() {

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const [budget, todayExpenses, monthly] = await Promise.all([
        getBudget(),
        getTodayExpenses(),
        getMonthlySummary(year, month),
    ]);

    return {
        budget: budget.data,
        today: todayExpenses.data,
        monthly: monthly.data,
    };
}