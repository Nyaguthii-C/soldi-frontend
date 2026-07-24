import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";


export default function Navbar(){

    return(

        // <nav className="navbar border-bottom shadow-sm">

        //     <div className="container">

        //         <span className="navbar-brand font-bold"> SOLDI Tracker </span>
        //         <span>
        //             <NavLink to="/profile"> <i className="bi bi-person-fill"></i> </NavLink>
        //         </span>
        //         <span> 
        //             <ThemeToggle />
        //         </span>
            
        //     </div>

        // </nav>


        <nav className="navbar border-bottom shadow-sm">

            <div className="container d-flex justify-content-between align-items-center">

                <span className="navbar-brand mb-0">
                    SOLDI Tracker
                </span>

                <div className="d-flex align-items-center gap-3">

                    <NavLink to="/profile">
                        <i className="bi bi-person-fill"></i>
                    </NavLink>

                    <ThemeToggle />

                </div>

            </div>

        </nav>


    );

}