import { NavLink } from "react-router-dom";
import LogoutButton from "../common/LogoutButton";

export default function BottomNav() {

    return (

        <nav className="navbar bg-white border-top fixed-bottom">

        <div className="container justify-content-around">

        <NavLink to="/dashboard">

            🏠

        </NavLink>

        <NavLink to="/expenses">

            💳

        </NavLink>

        <NavLink to="/summary">

            📊

        </NavLink>

        <NavLink to="/profile">

            👤

        </NavLink>

        <LogoutButton className="btn btn-outline-danger btn-sm" />

        </div>

        </nav>

    );

}