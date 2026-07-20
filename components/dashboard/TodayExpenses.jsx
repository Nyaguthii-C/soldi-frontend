import ExpenseItem from "./ExpenseItem";

export default function TodayExpenses({ expenses, onEdit }) {

    return (

        <div className="card shadow-sm">

            <div className="card-body">

                <h5 className="mb-3">

                    Today's Expenses

                </h5>

                {expenses.length === 0 ? (

                    <p className="text-muted">

                        No expenses today.

                    </p>

                ) : (

                    expenses.map(expense => (

                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onClick={onEdit}
                        />

                    ))

                )}

            </div>

        </div>

    );

}