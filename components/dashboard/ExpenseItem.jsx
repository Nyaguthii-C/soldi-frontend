export default function ExpenseItem({ expense, onClick }) {

    return (

        <div
            className="card mb-3 border-0 shadow-sm expense-card"
            role="button"
            onClick={() => onClick(expense)}
        >

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-start">

                    <div>

                        <h6 className="mb-1">
                            {expense.description}
                        </h6>

                        <small className="badge bg-primary">
                            {expense.category}
                        </small>

                    </div>

                    <div>

                        <strong>
                            KES {Number(expense.amount).toLocaleString()}
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}