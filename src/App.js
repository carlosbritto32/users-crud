import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";
import "./App.css";
import { Layout } from "./components/Layout";
import { GeneralForm } from "./components/GeneralForm";
import { EditForm } from "./components/EditForm";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<GeneralForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
