import MainLayout from "../../components/layout/MainLayout";

export default function Dashboard(){

return(

<MainLayout>

<h2>

Dashboard

</h2>

</MainLayout>

)

}














// // export default function Dashboard() {
// //     return <h1>Dashboard</h1>;
// // }

// import { useAuth } from "../../contexts/AuthContext";

// export default function Dashboard() {

//     const { user } = useAuth();

//     return (

//         <div className="container mt-5">

//             <h2>

//                 Welcome {user?.user?.username || user?.username}

//             </h2>

//             <pre>

//                 {JSON.stringify(user, null, 2)}

//             </pre>

//         </div>

//     );

// }