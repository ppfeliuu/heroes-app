import React from "react";
import { AuthContext } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthContext.Provider>
      <AppRouter />;
    </AuthContext.Provider>
  );
};
