import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, setIsLogin, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
