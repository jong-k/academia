import Link from "next/link";
import { FormEvent, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { useSignup } from "@/hooks/useSignup";
import {
  Wrapper,
  AuthBox,
  AuthLabel,
  AuthInput,
  SubmitButton,
} from "@/styles/common/AuthForm.styled";
import { AuthContext } from "@/context/AuthContext";

export default function SignupPage() {
  const { signupForm, handleInputChange, onSubmit } = useSignup();
  const { error } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 회원가입 폼 검증
    // 하나라도 비었으면 에러
    if (Object.values(signupForm).some((input) => input.trim() === "")) {
      toast.error("모든 칸을 입력해야 합니다");
      return;
    }

    // 이름이 3자 미만이면 에러
    if (signupForm.username.trim().length < 3) {
      toast.error("이름은 3자 이상이어야 합니다");
      return;
    }

    // 비밀번호 확인이 일치하지 않으면 에러
    if (signupForm.password !== signupForm.passConfirm) {
      toast.error("비밀번호가 일치하지 않습니다");
      return;
    }

    // 비밀번호 6자 이상아니면 에러
    if (
      signupForm.password.trim().length < 6 &&
      signupForm.passConfirm.trim().length < 6
    ) {
      toast.error("6자 이상의 비밀번호를 입력해야 합니다");
      return;
    }

    onSubmit(e);
  };

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <Layout title="회원 가입">
      <Wrapper>
        <h1>회원 가입</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <AuthBox>
            <AuthLabel htmlFor="email">이메일</AuthLabel>
            <AuthInput
              type="email"
              id="email"
              name="email"
              value={signupForm.email}
              onChange={handleInputChange}
            />
          </AuthBox>
          <AuthBox>
            <AuthLabel htmlFor="username">이름</AuthLabel>
            <AuthInput
              type="text"
              id="username"
              name="username"
              value={signupForm.username}
              onChange={handleInputChange}
            />
          </AuthBox>
          <AuthBox>
            <AuthLabel htmlFor="password">비밀번호</AuthLabel>
            <AuthInput
              type="password"
              id="password"
              name="password"
              value={signupForm.password}
              onChange={handleInputChange}
            />
          </AuthBox>
          <AuthBox>
            <AuthLabel htmlFor="passConfirm">비밀번호 확인</AuthLabel>
            <AuthInput
              type="password"
              id="passConfirm"
              name="passConfirm"
              value={signupForm.passConfirm}
              onChange={handleInputChange}
            />
          </AuthBox>
          <SubmitButton type="submit">회원 가입</SubmitButton>
        </form>
        <p>
          이미 계정이 있다면? <Link href="/account/login">로그인</Link>
        </p>
      </Wrapper>
    </Layout>
  );
}
