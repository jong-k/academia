import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { AuthContext } from "context/AuthContext";

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onLogin = (e: FormEvent) => {
    login(loginForm);
  };

  return { loginForm, handleInputChange, onLogin };
};
