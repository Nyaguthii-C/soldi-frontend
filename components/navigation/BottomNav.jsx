import { NavLink } from "react-router-dom";

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

        </div>

        </nav>

    );

}