export default function CurrencySelect({
    value,
    onChange,
}) {
    return (
        <div className="mb-3">

            <label className="form-label">
                Currency
            </label>

            <select
                className="form-select"
                name="currency"
                value={value}
                onChange={onChange}
            >
                <option value="KES">KES</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>

        </div>
    );
}