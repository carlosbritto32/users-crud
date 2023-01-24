import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { UsersTable } from "../components/UsersTable";
import { TableTitle } from "../components/TableTitle";
import "../style/Dashboard.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // Reference DB of firestore
  const usersCollection = collection(db, "users");
  // Show data Function
  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // UseEffect to execute the function
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="create-container">
        <Link to="/new" className="create-title">
          Create a New User
        </Link>
      </div>

      <section className="section">
        <TableTitle />
        {users.map((user) => (
          <UsersTable user={user} key={user.id} />
        ))}
      </section>
    </>
  );
};
