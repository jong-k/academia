import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useSignup = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    username: "",
    password: "",
    passConfirm: "",
  });
  const { signup, error } = useContext(AuthContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    signup(signupForm);
  };

  return { signupForm, handleInputChange, onSubmit };
};
