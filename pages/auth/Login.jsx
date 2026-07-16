import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import TextInput from "../../components/forms/TextInput";
import SubmitButton from "../../components/forms/SubmitButton";

import { loginUser } from "../../services/authService";
import { getProfile } from "../../services/profileService";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            await loginUser(form);

            const profile = await getProfile();

            setUser(profile.data);

            navigate("/dashboard");

        }

        catch (err) {

            if (err.response?.data?.detail) {

                setError(err.response.data.detail);

            }

            else {

                setError("Unable to login.");

            }

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <AuthLayout title="Welcome back">

            {error && (

                <div className="alert alert-danger">

                    {error}

                </div>

            )}

            <form onSubmit={handleSubmit}>

                <TextInput

                    label="Username"

                    name="username"

                    value={form.username}

                    onChange={handleChange}

                />

                <TextInput

                    label="Password"

                    type="password"

                    name="password"

                    value={form.password}

                    onChange={handleChange}

                />

                <SubmitButton loading={loading}>

                    Login

                </SubmitButton>

            </form>

            <div className="text-center mt-3">

                Don't have an account?

                {" "}

                <Link to="/register">

                    Register

                </Link>

            </div>

        </AuthLayout>

    );

}
