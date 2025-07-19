import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(authData.isAuthenticated);
      setCurrentUser(authData.user);
    }
  }, []);

  const login = (username, password) => {
    // Static credentials validation
    const validCredentials = {
      username: "admin",
      password: "admin123",
    };

    if (username === validCredentials.username && password === validCredentials.password) {
      const user = {
        id: 1,
        username: username,
        fullName: "Administrator",
      };

      setIsAuthenticated(true);
      setCurrentUser(user);

      // Save to localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: user,
        })
      );

      return { success: true, message: "Login successful" };
    }

    return { success: false, message: "Invalid username or password" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("auth");
  };

  const updateProfile = (profileData) => {
    const updatedUser = { ...currentUser, ...profileData };
    setCurrentUser(updatedUser);
    localStorage.setItem(
      "auth",
      JSON.stringify({
        isAuthenticated: true,
        user: updatedUser,
      })
    );
  };

  return {
    isAuthenticated,
    currentUser,
    login,
    logout,
    updateProfile,
  };
};
