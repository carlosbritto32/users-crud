import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // To register user in firebase
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // to Login with firebase user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  To logout
  const logout = () => signOut(auth);

  // To know the state of users (Login, logout, etc)
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, loading, logout }}>
      {children}
    </authContext.Provider>
  );
};
