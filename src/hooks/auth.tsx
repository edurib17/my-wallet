import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@my-wallet:logged");
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "edu@gmail.com" && password === "123") {
      localStorage.setItem("@my-wallet:logged", "true");
      setLogged(true);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Senha ou usuário invalido!!",
        showConfirmButton: false,
        timer: 1900,
      });
    }
  };
  const signOut = () => {
    localStorage.removeItem("@my-wallet:logged");
    setLogged(false);
  };
  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
