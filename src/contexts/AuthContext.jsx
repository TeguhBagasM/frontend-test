import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

// Export AuthContext untuk digunakan langsung di App.jsx
export default AuthContext;
