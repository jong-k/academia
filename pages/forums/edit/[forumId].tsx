import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaImage } from "react-icons/fa";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import {
  InputStyled,
  LabelStyled,
  TextareaStyled,
  ButtonStyled,
  GridBox,
} from "@/styles/common/ForumForm.styled";

export default function EditForum({ forum }) {
  const [mounted, setMounted] = useState(false);
  const { name, host, place, address, date, time, description, image } =
    forum.attributes;
  const [values, setValues] = useState({
    name,
    host,
    place,
    address,
    date,
    time,
    description,
  });
  const [imgPreview, setImgPreview] = useState(
    image.data ? image.data.attributes.formats.thumbnail.url : null,
  );
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // validation
    const hasEmptyFields = Object.values(values).some((value) => value === "");
    if (hasEmptyFields) toast.error("모든 칸을 입력해주세요");

    const res = await fetch(`http://localhost:1337/api/forums/${forum.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        data: values,
      }),
    });

    if (!res.ok) {
      toast.error("포럼을 수정하지 못했습니다");
      console.log(res);
    } else {
      const { data: forum } = await res.json();
      router.push(`/forums/${forum.id}`);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout>
        <Link href="/forums">이전 페이지</Link>
        <h2>포럼 수정</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <GridBox>
            <div>
              <LabelStyled htmlFor="name">포럼 이름</LabelStyled>
              <InputStyled
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="host">호스트</LabelStyled>
              <InputStyled
                type="text"
                name="host"
                id="host"
                value={values.host}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="place">장소</LabelStyled>
              <InputStyled
                type="text"
                name="place"
                id="place"
                value={values.place}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="address">주소</LabelStyled>
              <InputStyled
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="date">날짜</LabelStyled>
              <InputStyled
                type="date"
                name="date"
                id="date"
                value={values.date} // FIXME 날짜 형식 관
                onChange={handleInputChange}
              />
            </div>
            <div>
              <LabelStyled htmlFor="time">시간</LabelStyled>
              <InputStyled
                type="text"
                name="time"
                id="time"
                value={values.time}
                onChange={handleInputChange}
              />
            </div>
          </GridBox>

          <div>
            <LabelStyled htmlFor="description">포럼 상세</LabelStyled>
            <TextareaStyled
              name="description"
              id="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
          <ButtonStyled type="submit">포럼 수정</ButtonStyled>
        </form>
        <h2>포럼 이미지</h2>
        {imgPreview ? (
          <Image src={imgPreview} alt="포럼 이미지" width={170} height={100} />
        ) : (
          <div>
            <p>등록된 이미지가 없습니다</p>
          </div>
        )}
        <div>
          <ButtonStyled>
            <FaImage />
          </ButtonStyled>
        </div>
      </Layout>
    )
  );
}

export async function getServerSideProps({ params: { forumId } }) {
  const res = await fetch(
    `${API_URL}/forums?filters[id][$eq]=${forumId}&populate=*`,
  );
  const forumData = await res.json();
  const forum = forumData.data[0];

  return {
    props: {
      forum,
    },
  };
}
