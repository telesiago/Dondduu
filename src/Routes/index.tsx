import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import CreateAccount from "../pages/CreateAccount";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}