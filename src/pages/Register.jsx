import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";
import "../style/LoginAndRegister.css";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signup } = useAuth();
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
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };
  return (
    <div className="form-container">
      {error && <ErrorMsg message={error} />}

      <form onSubmit={handleSubmit} className="form">
        <div className="group-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="group-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
        </div>

        <button className="button">Register</button>

        <p className="message-info">
          Already have an Account?
          <Link to="/login" className="link">
            Login !
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
