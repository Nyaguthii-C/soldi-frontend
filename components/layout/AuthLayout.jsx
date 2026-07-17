export default function AuthLayout({ title, children }) {
    return (
        <div className="container">

            <div className="row justify-content-center min-vh-100 align-items-center">

                <div className="col-md-5 col-lg-4">

                    <div className="text-center mb-4">

                        <i className="bi bi-wallet2 display-4 text-primary"></i>

                        <h2 className="mt-3">
                            Soldi Expense Tracker
                        </h2>

                        <p className="text-muted">
                            {title}
                        </p>

                    </div>

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-body p-4">

                            {children}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}