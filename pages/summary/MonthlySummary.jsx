import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import SummaryHeader from "./SummaryHeader";
import SummaryStats from "./SummaryStats";
import CategoryBreakdown from "./CategoryBreakdown";
import { getMonthlySummary } from "../../services/summaryService";

export default function MonthlySummary() {

    const today = new Date();

    const [year, setYear] = useState(today.getFullYear());

    const [month, setMonth] = useState(today.getMonth() + 1);

    const [summary, setSummary] = useState(null);

    const [loading, setLoading] = useState(true);

    async function loadSummary(selectedYear = year, selectedMonth = month) {

        try {

            const response = await getMonthlySummary(
                selectedYear,
                selectedMonth
            );

            setSummary(response.data);

        }

        catch(error){

            console.error(error);

        }

        finally{

            setLoading(false);

        }

    }

    useEffect(() => {

        loadSummary();

    }, []);

    if(loading){

        return (

            <MainLayout>

                Loading...

            </MainLayout>

        );

    }

    return(

        <MainLayout>

            <SummaryHeader
                month={month}
                year={year}
                onMonthChange={setMonth}
                onYearChange={setYear}
                onLoad={loadSummary}
            />

            <SummaryStats summary={summary}/>

            <CategoryBreakdown
                categories={summary.categories}
            />

        </MainLayout>

    );

}
