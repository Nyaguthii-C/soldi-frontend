export default function SubmitButton({
    children,
    loading,
}) {
    return (
        <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
        >
            {loading ? (
                <>
                    <span
                        className="spinner-border spinner-border-sm me-2"
                    ></span>

                    Please wait...
                </>
            ) : (
                children
            )}
        </button>
    );
}