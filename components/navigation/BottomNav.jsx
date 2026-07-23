import { NavLink } from "react-router-dom";

export default function BottomNav() {

    return (

        <nav className="navbar border-top fixed-bottom">
            <div className="container justify-content-around">
                <NavLink to="/dashboard"> <i className="bi bi-house-fill"></i> </NavLink>
                <NavLink to="/expenses"> <i className="bi bi-wallet-fill"> </i></NavLink>
                <NavLink to="/summary"> <i className="bi bi-bar-chart-fill"></i></NavLink>
                <NavLink to="/profile"> <i className="bi bi-person-fill"></i> </NavLink>
            </div>
        </nav>
    );

}