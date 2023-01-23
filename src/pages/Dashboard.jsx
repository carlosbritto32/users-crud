import { GeneralForm } from "../components/GeneralForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { UsersTable } from "../components/UsersTable";
import { TableTitle } from "../components/TableTitle";
import "../style/Dashboard.css";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        const createdUser = doc.data();
        docs.push({ ...createdUser, id: doc.id });
      });
      setUsers(docs);
    }
    getUsers();
  }, [users]);
  return (
    <div>
      <GeneralForm />
      <section className="section">
        <TableTitle />
        {users.map((user) => (
          <UsersTable user={user} key={user.id} />
        ))}
      </section>
    </div>
  );
};
