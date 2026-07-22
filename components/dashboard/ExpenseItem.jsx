export default function ExpenseItem({

    expense,

    onClick,

    showDate = false,

    showCategory = true,

    currency = "KES",

}) {

    return (

        <div
            className="card mb-3 border-0 shadow-sm expense-card"
            role="button"
            onClick={() => onClick?.(expense)}
        >

            <div className="card-body">

                <div className="d-flex justify-content-between">

                    <div>

                        <h6 className="mb-1">

                            {expense.description}

                        </h6>

                        {showCategory && (

                            <span className="badge bg-primary">

                                {expense.category}

                            </span>

                        )}

                        {showDate && (

                            <div className="mt-2">

                                <small className="text-muted">

                                    {new Date(

                                        expense.expense_date

                                    ).toLocaleDateString()}

                                </small>

                            </div>

                        )}

                    </div>

                    <strong>

                        {currency}

                        {" "}

                        {Number(

                            expense.amount

                        ).toLocaleString()}

                    </strong>

                </div>

            </div>

        </div>

    );

}