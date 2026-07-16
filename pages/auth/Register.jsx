import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import TextInput from "../../components/forms/TextInput";
import CurrencySelect from "../../components/forms/CurrencySelect";
import SubmitButton from "../../components/forms/SubmitButton";

import { registerUser } from "../../services/authService";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        monthly_limit: "",
        currency: "KES",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setErrors({});
        setSuccess("");

        try {
            const response = await registerUser(form);

            setSuccess(response.data.message);

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {

            if (error.response) {
                setErrors(error.response.data);
            }

        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout title="Create your account">

            {success && (
                <div className="alert alert-success">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit}>

                <TextInput
                    label="Username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    error={errors.username}
                />

                <TextInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <TextInput
                    label="Monthly Limit"
                    type="number"
                    name="monthly_limit"
                    value={form.monthly_limit}
                    onChange={handleChange}
                    error={errors.monthly_limit}
                />

                <CurrencySelect
                    value={form.currency}
                    onChange={handleChange}
                />

                <SubmitButton loading={loading}>
                    Register
                </SubmitButton>

            </form>

            <div className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/">Login</Link>
            </div>

        </AuthLayout>
    );
}