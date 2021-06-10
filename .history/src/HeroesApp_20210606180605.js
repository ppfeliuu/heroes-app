import React, { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init);
  return (
    <AuthContext.Provider value={{}}>
      <AppRouter />;
    </AuthContext.Provider>
  );
};
