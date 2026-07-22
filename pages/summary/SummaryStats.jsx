export default function SummaryStats({

    summary,

}) {

    return (

        <div className="row g-3 mb-4">

            <div className="col-md-4">

                <div className="card shadow-sm">

                    <div className="card-body text-center">

                        <div className="fs-2">

                            💰

                        </div>

                        <small>

                            Budget

                        </small>

                        <h4>

                            {summary.currency}

                            {" "}

                            {Number(
                                summary.monthly_budget
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow-sm">

                    <div className="card-body text-center">

                        <div className="fs-2">

                            📉

                        </div>

                        <small>

                            Spent

                        </small>

                        <h4 className="text-danger">

                            {summary.currency}

                            {" "}

                            {Number(
                                summary.total_spent
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

            <div className="col-md-4">

                <div className="card shadow-sm">

                    <div className="card-body text-center">

                        <div className="fs-2">

                            ✅

                        </div>

                        <small>

                            Remaining

                        </small>

                        <h4 className="text-success">

                            {summary.currency}

                            {" "}

                            {Number(
                                summary.remaining
                            ).toLocaleString()}

                        </h4>

                    </div>

                </div>

            </div>

        </div>

    );

}
