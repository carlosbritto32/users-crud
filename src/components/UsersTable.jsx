import { deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

import "../style/Table.css";

export const UsersTable = ({ user }) => {
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    window.location.reload(false);
  };
  return (
    <>
      <div className="grid">
        <span>{user.name}</span>
        <span>{user.email}</span>
        <span>{user.age}</span>
        <span>
          <Link to={`/edit/${user.id}`} className="update">
            ✒️
          </Link>
          <button
            type="submit"
            className="delete"
            onClick={() => deleteUser(user.id)}
          >
            🗑️
          </button>
        </span>
      </div>
    </>
  );
};
