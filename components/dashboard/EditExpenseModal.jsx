import { useEffect, useState } from "react";

export default function EditExpenseModal({

    expense,
    onClose,
    onSave,
    onDelete,

}) {

    const [description, setDescription] = useState("");

    const [amount, setAmount] = useState("");

    useEffect(() => {

        if (expense) {

            setDescription(expense.description);

            setAmount(expense.amount);

        }

    }, [expense]);

    if (!expense) return null;

    return (

        <div
            className="modal d-block"
            tabIndex="-1"
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5>Edit Expense</h5>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        />

                    </div>

                    <div className="modal-body">

                        <input
                            className="form-control mb-3"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />

                        <input
                            className="form-control"
                            type="number"
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                        />

                    </div>

                    <div className="modal-footer">

                        <button
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                onSave({
                                    description,
                                    amount,
                                })
                            }
                        >
                            Save
                        </button>
                        
                        <button
                            className="btn btn-outline-danger me-auto"
                            onClick={() => onDelete(expense.id)}
                        >
                            Delete
                        </button>
                    </div>

                </div>

            </div>

        </div>

    );

}
