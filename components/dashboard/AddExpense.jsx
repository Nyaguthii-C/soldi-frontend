import { useState } from "react";
import { logExpenses } from "../../services/expenseService";

export default function AddExpense({ onSuccess }) {

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        if (!prompt.trim()) return;

        setLoading(true);
        setError("");

        try {

            await logExpenses({
                prompt: prompt.trim(),
            });

            setPrompt("");

            if (onSuccess) {
                onSuccess();
            }

        } catch (err) {

            setError("Unable to log expense.");

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-body">

                <h5 className="card-title">
                    What did you spend on today? 
                </h5>

                <p className="text-muted small">
                    Example: <strong>Bread 240</strong>
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control"
                        placeholder="Milk 120"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />

                    {error && (
                        <div className="text-danger mt-2">
                            {error}
                        </div>
                    )}

                    <button
                        className="btn btn-primary mt-3 w-100"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add Expense"}
                    </button>

                </form>

            </div>

        </div>

    );

}