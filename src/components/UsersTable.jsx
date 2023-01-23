import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import "../style/Table.css";

export const UsersTable = ({ user }) => {
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  return (
    <>
      <div className="grid">
        <span>{user.name}</span>
        <span>{user.email}</span>
        <span>{user.age}</span>
        <span>
          <button className="update">✒️</button>
          <button className="delete" onClick={() => deleteUser(user.id)}>
            🗑️
          </button>
        </span>
      </div>
    </>
  );
};
