import { ChangeEvent, useState } from "react";
import { MUTATION_URL } from "@/config/index";
import { FileBox } from "@/styles/common/ForumForm.styled";
import { ButtonStyled } from "./styled";

export default function ImgUpload({ forumId, imgUploaded }) {
  const [img, setImg] = useState(null);

  const handleSubmit = async (e) => {
    if (!img) return;
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", img);
    formData.append("ref", "api::forum.forum");
    formData.append("refId", forumId);
    formData.append("field", "image");

    try {
      const res = await fetch(`${MUTATION_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      imgUploaded();
    } catch (err) {
      window.alert("이미지 등록에 실패했습니다");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.files?.[0]);
  };

  return (
    <div>
      <h2>포럼 이미지 등록</h2>
      <form onSubmit={handleSubmit}>
        <FileBox>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </FileBox>
        <ButtonStyled>등록</ButtonStyled>
      </form>
    </div>
  );
}
