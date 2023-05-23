import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER_URL } from "@/config/index";
import Layout from "@/components/Layout";
import {
  InputStyled,
  LabelStyled,
  TextareaStyled,
  ButtonStyled,
  GridBox,
} from "@/styles/common/ForumForm.styled";
import ImgUpload from "@/components/ImgUpload";
import Modal from "@/components/Modal";
import { parseCookies } from "../../../utils";

export default function EditForum({ forum, token }) {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const imgUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await fetch(
        `${SERVER_URL}/forums?filters[id][$eq]=${forum.id}&populate=*`,
      );
      const data = await res.json();
      setImgPreview(
        data.data[0].attributes.image.data.attributes.formats.thumbnail.url,
      );
    } catch (err) {
      window.alert("에러가 발생했습니다");
      console.log(err);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // validation
    const hasEmptyFields = Object.values(values).some((value) => value === "");
    if (hasEmptyFields) {
      toast.error("모든 칸을 입력해주세요");
      return;
    }

    const res = await fetch(`${SERVER_URL}/forums/${forum.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        data: values,
      }),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("수정 권한이 없습니다");
        return;
      }
      toast.error("포럼을 수정하지 못했습니다");
    } else {
      await router.push(`/forums/${forum.id}`);
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
        <h2>포럼 정보 수정</h2>
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
          <ButtonStyled onClick={() => setShowModal(true)}>
            <span>이미지 수정</span>
          </ButtonStyled>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <ImgUpload
            forumId={forum.id}
            imgUploaded={imgUploaded}
            token={token}
          />
        </Modal>
      </Layout>
    )
  );
}

// 변경이 발생했을 수 있으므로 최신 데이터를 불러오기 위해 getStaticProps 대신 사용
export async function getServerSideProps({ params: { forumId }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(
    `${SERVER_URL}/forums?filters[id][$eq]=${forumId}&populate=*`,
  );
  const forum = await res.json();

  if (res.ok) {
    return {
      props: {
        forum: forum.data[0],
        token,
      },
    };
  } else {
    console.log(res);
    return {
      props: {},
    };
  }
}
