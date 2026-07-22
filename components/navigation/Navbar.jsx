import { useAuth } from "../../contexts/AuthContext";

export default function Navbar(){

    const { user } = useAuth();


    const greeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 18) return "Good Afternoon";

        return "Good Evening";

    };

    return(

        <nav className="navbar bg-white shadow-sm">

            <div className="container">

                <span className="navbar-brand">

                    Soldi

                </span>

                <span>

                    {greeting()}   {user?.user?.username || user?.username}

                </span>

            </div>

        </nav>

    );

}