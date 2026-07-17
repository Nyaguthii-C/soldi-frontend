import { useAuth } from "../../contexts/AuthContext";

export default function Navbar(){

    const { user } = useAuth();

    return(

<nav className="navbar bg-white shadow-sm">

<div className="container">

<span className="navbar-brand">

💰 Expense Tracker

</span>

<span>

{user?.user?.username || user?.username}

</span>

</div>

</nav>

    );

}