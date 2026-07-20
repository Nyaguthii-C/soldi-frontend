export default function ExpenseItem({ expense }) {

    return (

        <div className="card mb-3 border-0 shadow-sm">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-start">

                    <div>

                        <h6 className="mb-1">

                            {expense.description}

                        </h6>

                        <small className="text-muted">

                            {expense.category}

                        </small>

                    </div>

                    <div className="text-end">

                        <strong>

                            KES {Number(expense.amount).toLocaleString()}

                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}
