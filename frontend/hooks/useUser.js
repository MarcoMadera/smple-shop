import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useRouter } from "next/router";

export default function useUser() {
  const { user, setUser, setIsLogin, isLogin } = useContext(AuthContext);
  const router = useRouter();
  function login(email) {
    setUser({ email });
    setIsLogin(true);
    router.push("/");
  }
  function logout() {
    setUser(null);
    setIsLogin(false);
  }
  return {
    user,
    login,
    setUser,
    isLogin,
    setIsLogin,
    logout,
  };
}
