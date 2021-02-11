import Link from "next/link";
import useUser from "../hooks/useUser";
export default function Header() {
  const { isLogin, logout } = useUser();

  return (
    <header>
      {isLogin ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
      <style jsx>{`
        header {
          display: block;
          width: 100vw;
          height: 80px;
          background: #030353;
          padding: 10px 30px;
        }
      `}</style>
    </header>
  );
}
