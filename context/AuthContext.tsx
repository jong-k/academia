import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CLIENT_URL } from "@/config/index";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signup = async (user) => {
    try {
      const res = await fetch(`${CLIENT_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      setUser(data.user);
      router.push("/account/dashboard");
    } catch (err) {
      setError(err.message);
      setError(null);
    }
  };

  const login = async ({ email: identifier, password }) => {
    try {
      const res = await fetch(`${CLIENT_URL}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });

      const data = await res.json();

      setUser(data.user);
      router.push("/account/dashboard");
    } catch (err) {
      setError(err.message); // toast 작동
      setError(null);
    }
  };

  const logout = async () => {
    try {
      const res = await fetch(`${CLIENT_URL}/logout`, {
        method: "POST",
      });

      setUser(null);
      router.push("/");
    } catch (err) {
      setError(err.message);
      setError(null);
    }
  };

  // 로그인 상태인지 체크하는 함수
  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`${CLIENT_URL}/user`);
      const data = await res.json();
      setUser(data.user);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
