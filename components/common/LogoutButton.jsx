import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

export default function LogoutButton({
    className = "btn btn-outline-danger",
    children = "Logout",
}) {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    function handleLogout() {
        logoutUser();
        setUser(null);
        navigate("/", { replace: true });
    }

    return (
        <button
            className={className}
            onClick={handleLogout}
        >
            {children}
        </button>
    );
}
