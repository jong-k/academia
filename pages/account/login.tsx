import { useContext, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { useLogin } from "@/hooks/useLogin";
import {
  Wrapper,
  AuthBox,
  AuthLabel,
  AuthInput,
  SubmitButton,
} from "@/styles/common/AuthForm.styled";
import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {
  const { loginForm, handleInputChange, handleSubmit } = useLogin();
  const { error } = useContext(AuthContext);

  useEffect(() => {
    if (error) toast.error(error);
  });

  return (
    <Layout title="로그인">
      <Wrapper>
        <h1>로그인</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <AuthBox>
            <AuthLabel htmlFor="email">이메일</AuthLabel>
            <AuthInput
              type="email"
              id="email"
              name="email"
              value={loginForm.email}
              onChange={handleInputChange}
            />
          </AuthBox>
          <AuthBox>
            <AuthLabel htmlFor="password">비밀번호</AuthLabel>
            <AuthInput
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleInputChange}
            />
          </AuthBox>
          <SubmitButton type="submit">로그인</SubmitButton>
        </form>
        <p>
          아직 계정이 없다면? <Link href="/account/signup">회원가입</Link>
        </p>
      </Wrapper>
    </Layout>
  );
}
