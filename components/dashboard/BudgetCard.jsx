export default function BudgetCard({ budget, monthly }) {

    return (

        <div className="row g-3 mb-4">

            <div className="col-md-4">

                <div className="card shadow-sm h-100">

                    <div className="card-body text-center">

                        <div className="fs-2">💰</div>

                        <small className="text-muted">

                            Budget

                        </small>

                        <h4 className="mt-2">

                            {budget.currency}{" "}

                            {Number(
                                budget.monthly_limit
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow-sm h-100">

                    <div className="card-body text-center">

                        <div className="fs-2">📉</div>

                        <small className="text-muted">

                            Spent

                        </small>

                        <h4 className="mt-2 text-danger">

                            {monthly.currency}{" "}

                            {Number(
                                monthly.total_spent
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow-sm h-100">

                    <div className="card-body text-center">

                        <div className="fs-2">✅</div>

                        <small className="text-muted">

                            Remaining

                        </small>

                        <h4 className="mt-2 text-success">

                            {monthly.currency}{" "}

                            {Number(
                                monthly.remaining
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

        </div>

    );

}