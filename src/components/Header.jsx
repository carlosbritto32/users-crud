import { useAuth } from "../context/authContext";
import "../style/Header.css";

export function Header() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading</h1>;
  return (
    <header className="header-container">
      <div>
        <a href="/">Users crud App</a>
      </div>
      <nav>
        <h2>
          Welcome <br /> {user.displayName || user.email}{" "}
        </h2>

        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
