import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <ErrorMsg message={error} />}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            onChange={handleChange}
          />
        </div>

        <button>Log in</button>

        <p>
          Don't have an Account?
          <Link to="/register">Register !</Link>{" "}
        </p>
      </form>
    </div>
  );
}
