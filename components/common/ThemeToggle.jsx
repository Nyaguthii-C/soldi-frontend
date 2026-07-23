import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {

        document.documentElement.setAttribute(
            "data-bs-theme",
            theme
        );

        localStorage.setItem(
            "theme",
            theme
        );

    }, [theme]);

    return (

        <button

            className="btn btn-outline-secondary btn-sm p-1"

            onClick={()=>

                setTheme(

                    theme==="light"

                    ?"dark"

                    :"light"

                )

            }

        >

            {


                theme === "light"
                    ? <i className="bi bi-moon-stars-fill"></i>
                    : <i className="bi bi-sun-fill"></i>


            }

        </button>

    );

}
