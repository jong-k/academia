import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MUTATION_URL, CLIENT_URL } from "@/config/index";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signup = async (user) => {
    console.log(user);
  };

  const login = async ({ email: identifier, password }) => {
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

    if (res.ok) {
      setUser(data.user);
      router.push("/account/dashboard");
    } else {
      setError(data.message); // toast 작동
      setError(null);
    }
  };

  const logout = async () => {
    console.log("logout");
  };

  const checkUserLoggedIn = async () => {
    console.log("check");
    const res = await fetch(`${CLIENT_URL}/user`);
    const data = await res.json();

    if (res.ok) setUser(data.user);
    else setUser(null);
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
