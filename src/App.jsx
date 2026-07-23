import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import MonthlySummary from "../pages/summary/MonthlySummary";
import Expenses from "../pages/expenses/Expenses";
import Profile from "../pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard"element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/summary" element={<ProtectedRoute> <MonthlySummary /> </ProtectedRoute>}/>
        <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;