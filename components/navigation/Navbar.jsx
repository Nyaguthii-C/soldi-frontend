import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";


export default function Navbar(){

    return(

        <nav className="navbar border-bottom shadow-sm">

            <div className="container">

                <span className="navbar-brand font-bold"> SOLDI Tracker </span>
                <span>
                    <NavLink to="/profile"> <i className="bi bi-person-fill"></i> </NavLink>
                </span>
                <span> 
                    <ThemeToggle />
                </span>
            
            </div>

        </nav>

    );

}