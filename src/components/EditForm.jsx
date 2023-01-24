import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const EditForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const user = doc(db, "users", id);
    const data = { name: name, email: email, age: age };
    await updateDoc(user, data);
    navigate("/");
  };

  const getUserById = async (id) => {
    const user = await getDoc(doc(db, "users", id));
    if (user.exists()) {
      //console.log(user.data())
      setName(user.data().name);
      setEmail(user.data().email);
      setAge(user.data().age);
    } else {
      console.log("the user doesnt exists");
    }
  };

  useEffect(() => {
    getUserById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={update} className="add-form">
      <input
        value={name}
        type="text"
        className="field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        className="field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={age}
        type="number"
        className="field"
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};
