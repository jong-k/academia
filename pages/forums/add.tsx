import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import {
  InputStyled,
  LabelStyled,
  TextareaStyled,
  ButtonStyled,
  GridBox,
} from "@/styles/common/ForumForm.styled";
import { parseCookies } from "../../utils";
import { SERVER_URL } from "@/config/index";

export default function AddForumPage({ token }) {
  const router = useRouter();
  // react-toastify 사용을 위해
  // SSR로 인한 Hydration 에러를 방지하기 위해
  // 페이지 렌더링 시 true로 바뀌는 mounted 상태
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    address: "",
    host: "",
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // 폼 검증

    if (Object.values(formData).some((field) => field === "")) {
      toast.error("모든 칸을 입력해야 합니다");
      return;
    }

    const url = SERVER_URL + "/forums";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("토큰이 없습니다");
        return;
      }
      toast.error("포럼 등록에 실패했습니다. 다시 시도해주세요");
    } else {
      const forum = await res.json();
      await router.push(`/forums/${forum.id}`);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout title="포럼 등록 | 아카데미아">
        <Link href="/forums">뒤로 가기</Link>
        <h1>포럼 등록</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <GridBox>
            <div>
              <LabelStyled htmlFor="name">포럼 이름</LabelStyled>
              <InputStyled
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="host">호스트 이름</LabelStyled>
              <InputStyled
                type="text"
                name="host"
                id="host"
                value={formData.host}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="place">장소</LabelStyled>
              <InputStyled
                type="text"
                name="place"
                id="place"
                value={formData.place}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="address">주소</LabelStyled>
              <InputStyled
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="date">날짜</LabelStyled>
              <InputStyled
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="time">시간</LabelStyled>
              <InputStyled
                type="text"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
          </GridBox>
          <div>
            <LabelStyled htmlFor="description">상세 내용</LabelStyled>
            <TextareaStyled
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <ButtonStyled type="submit">등록</ButtonStyled>
        </form>
      </Layout>
    )
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
