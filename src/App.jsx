import "./App.css"
import {  BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./auth/Login"
import PrivateRoute from "./routes/PrivateRoute"
import AdminRoute from "./routes/AdminRoute"

// user pages
import UserDashboard from "./users/pages/Dashboard"
import RequestForm from "./users/pages/RequestForm"
import RequestHistory from "./users/pages/RequestHistory"
import QueueStatus from "./users/pages/QueueStatus"

// admin pages
import RegistrarDashboard from './admin/pages/RegistrarDashboard'
import AccountingDashboard from './admin/pages/AccountingDashboard'
import CashierDashboard from './admin/pages/CashierDashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* public */}
          <Route path="/" element={<Login />} />

          {/* user only */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="/history" element={<RequestHistory />} />
            <Route path="/queue" element={<QueueStatus />} />
          </Route>

          {/* admin only */}
          <Route element={<AdminRoute />}>
            <Route path="/registrar" element={<RegistrarDashboard />} />
            <Route path="/accounting" element={<AccountingDashboard />} />
            <Route path="/cashier" element={<CashierDashboard />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
