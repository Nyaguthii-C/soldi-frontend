import { useEffect, useState } from "react";
import TodayExpenses from "../../components/dashboard/TodayExpenses";
import MainLayout from "../../components/layout/MainLayout";
import BudgetCard from "../../components/dashboard/BudgetCard";
import AddExpense from "../../components/dashboard/AddExpense";
import { getDashboardData } from "../../services/dashboardService";
import EditExpenseModal from "../../components/dashboard/EditExpenseModal";
import { updateExpenseById, deleteExpenseById } from "../../services/expenseService";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {

    const {user} = useAuth();
    const greeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 18) return "Good Afternoon";

        return "Good Evening";

    };

    const [selectedExpense, setSelectedExpense] = useState(null);   

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    async function loadDashboard() {

        try {

            const data = await getDashboardData();

            setDashboard(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function saveExpense(data) {

        await updateExpenseById(

            selectedExpense.id,

            data

        );

        setSelectedExpense(null);

        loadDashboard();

    }

    async function deleteExpense(id) {

        await deleteExpenseById(id);

        setSelectedExpense(null);

        loadDashboard();

    }    

    useEffect(() => {

        loadDashboard();

    }, []);

    if (loading) {

        return (

            <MainLayout>

                <p>Loading dashboard...</p>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            {/* <h2 className="mb-0">

                {greeting()} 

            </h2> */}


        <div className="mb-4 p-4 shadow-sm card">
            <h4 className="mb-1">
            {greeting()} {user?.user?.username || user?.username}
            </h4>
  
        </div>

            <AddExpense
                onSuccess={loadDashboard}
            />

            <TodayExpenses
                expenses={dashboard.today}
                onEdit={setSelectedExpense}
            />

            <EditExpenseModal

                expense={selectedExpense}
                onClose={() => setSelectedExpense(null)}
                onSave={saveExpense}
                onDelete={deleteExpense}

            />

        </MainLayout>

    );

}