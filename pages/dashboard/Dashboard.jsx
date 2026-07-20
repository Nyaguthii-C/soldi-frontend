// import MainLayout from "../../components/layout/MainLayout";

// export default function Dashboard(){

// return(

// <MainLayout>

// <h2>

// Dashboard

// </h2>

// </MainLayout>

// )

// }

import { useEffect, useState } from "react";

import TodayExpenses from "../../components/dashboard/TodayExpenses";
import MainLayout from "../../components/layout/MainLayout";
import BudgetCard from "../../components/dashboard/BudgetCard";
import QuickExpense from "../../components/dashboard/QuickExpense";


import { getDashboardData } from "../../services/dashboardService";

export default function Dashboard() {

    const greeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 18) return "Good Afternoon";

        return "Good Evening";

    };    

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

            <h2 className="mb-0">

                {greeting()} 👋

            </h2>

            <BudgetCard
                budget={dashboard.budget}
                monthly={dashboard.monthly}
            />

            <QuickExpense
                onSuccess={loadDashboard}
            />

            <TodayExpenses
                expenses={dashboard.today}
            />

        </MainLayout>

    );

}