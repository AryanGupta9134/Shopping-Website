// This will store user information

import { createContext } from "react";
import { useCallback, useState } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const login = useCallback((email, userName) => {
    setUser({ email, userName });
  }, []);

  const logout = useCallback(() => {
    setUser({});
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, cartItems, setCartItems }}>
      {children}
    </AuthContext.Provider>
  );
};
