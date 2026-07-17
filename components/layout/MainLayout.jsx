import Navbar from "../navigation/Navbar";
import BottomNav from "../navigation/BottomNav";

export default function MainLayout({ children }) {

    return (

        <div className="d-flex flex-column min-vh-100">

            <Navbar/>

            <main className="container py-4 flex-grow-1">

                {children}

            </main>

            <BottomNav/>

        </div>

    );

}