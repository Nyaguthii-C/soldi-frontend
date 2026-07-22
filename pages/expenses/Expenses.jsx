import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import ExpenseItem from "../../components/dashboard/ExpenseItem";
import EditExpenseModal from "../../components/dashboard/EditExpenseModal";

import {
    getExpenses,
    updateExpenseById,
    deleteExpenseById,
} from "../../services/expenseService";

export default function Expenses() {

    const [expenses, setExpenses] = useState([]);

    const [selectedExpense, setSelectedExpense] = useState(null);
    const [search, setSearch] = useState("");

    async function loadExpenses() {

        try {

            const response = await getExpenses();

            setExpenses(response.data);

        }

        catch(error){

            console.error(error);

        }

    }

    useEffect(() => {

        loadExpenses();

    }, []);

    async function saveExpense(data){

        await updateExpenseById(
            selectedExpense.id,
            data
        );

        setSelectedExpense(null);

        loadExpenses();

    }

    async function deleteExpense(id){

        await deleteExpenseById(id);

        setSelectedExpense(null);

        loadExpenses();

    }

    return(

        <MainLayout>

            <h2 className="mb-4">

                Expense History

            </h2>

            <input

                className="form-control mb-4"

                placeholder="Search expenses..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {expenses

                .filter(expense =>

                expense.description

                .toLowerCase()

                .includes(

                search.toLowerCase()

                )

                )

                .map(expense => (

                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    onClick={setSelectedExpense}
                    showDate={true}
                    showCategory={true}
                    currency="KES"
                />
            ))}

            <EditExpenseModal

                expense={selectedExpense}

                onClose={() => setSelectedExpense(null)}

                onSave={saveExpense}

                onDelete={deleteExpense}

            />

        </MainLayout>

    );

}
