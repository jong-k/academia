import { FormEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "components/Layout";
import { useLogin } from "hooks/useLogin";
import {
  Wrapper,
  AuthBox,
  AuthLabel,
  AuthInput,
  SubmitButton,
  SpinnerWrapper,
} from "styles/common/AuthForm.styled";
import { AuthContext } from "context/AuthContext";
import LoadingSpinner from "components/LoadingSpinner";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { loginForm, handleInputChange, onLogin } = useLogin();
  const { error } = useContext(AuthContext);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // 로그인 폼 검증
    // 하나라도 비었으면 에러
    if (Object.values(loginForm).some((input) => input.trim() === "")) {
      toast.error("모든 칸을 입력해야 합니다");
      return;
    }

    // 비번이 6자 미만이면 에러
    if (loginForm.password.trim().length < 6) {
      toast.error("비밀번호는 6자 이상이어야 합니다");
      return;
    }
    setIsLoading(true);
    onLogin(e);
  };

  useEffect(() => {
    if (error) toast.error(error);
    setIsLoading(false);
  }, [error]);

  return (
    <Layout title="로그인">
      {isLoading ? (
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      ) : (
        <Wrapper>
          <h1>로그인</h1>
          <ToastContainer />
          <form onSubmit={handleLogin}>
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
      )}
    </Layout>
  );
}
