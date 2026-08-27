import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../config/firebaseConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });

    return cancelar;
  }, []);

  function cadastrar(email, senha) {
    return createUserWithEmailAndPassword(auth, email, senha);
  }

  function entrar(email, senha) {
    return signInWithEmailAndPassword(auth, email, senha);
  }

  function sair() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{ usuario, carregando, cadastrar, entrar, sair }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
