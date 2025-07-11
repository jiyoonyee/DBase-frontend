import styled from "styled-components";
import {
  SectionItemWrap,
  SectionSmallTtile,
  SectionSubTitle,
  SectionTitle,
} from "../style/SectionLayoutStyle";
import FileUploadInput from "../components/FileUploadInput";
import SubmitButton from "../components/SubmitButton";

const CompanyApplyLayout = () => {
  return (
    <>
      <CompnayInforAlign>
        <SectionItemWrap>
          <SectionTitle>알리콘</SectionTitle>
          <CompanySectionSubTitle style={{ marginBottom: "30px" }}>
            AI,IoT 소프트웨어 개발 직군
          </CompanySectionSubTitle>
          <SectionSmallTtile>
            <img src="../src/assets/images/CLocation.svg" alt="" />
            서울특별시 성동구 고산자로 14길 26
          </SectionSmallTtile>
          <SectionSmallTtile>
            <img src="../src/assets/images/CDeadline.svg" alt="" />
            마감: 2025.06.12
          </SectionSmallTtile>
          <SectionSmallTtile>
            <img src="../src/assets/images/CWork.svg" alt="" />
            서울특별시 성동구 고산자로 14길 26
          </SectionSmallTtile>
          <hr />
          <SectionSubTitle style={{ marginBottom: "20px" }}>
            자격요건 (우대자격)
          </SectionSubTitle>
          <div>
            <SectionSmallTtile style={{ marginBottom: "5px" }}>
              웹 모바일 서비스 개발 경험
            </SectionSmallTtile>
            <ul>
              <li>AI 알고리즘 개발 경험</li>
              <li>IoT 모듈 개발 경험</li>
            </ul>
          </div>
        </SectionItemWrap>
        <SectionItemWrap>
          <SectionTitle>지원서 작성</SectionTitle>
          <SectionSmallTtile style={{ marginBottom: "30px" }}>
            모든 필수 항목을 작성해주세요. 제출 후 수정이 불가능합니다.
          </SectionSmallTtile>
          <SectionSubTitle style={{ marginBottom: "20px" }}>
            <img src="../src/assets/images/fileUpload.svg" alt="" />
            서류 제출
          </SectionSubTitle>
          <FileWrap>
            <FileUploadInput
              LabelName={"이력서 + 자기소개서"}
            ></FileUploadInput>
            <FileUploadInput LabelName={"포트폴리오"}></FileUploadInput>
            <FileUploadInput
              LabelName={"기타"}
              LabelState={false}
            ></FileUploadInput>
          </FileWrap>

          <ButtonWrap>
            <SubmitButton
              Text={"지원서 제출"}
              TextColor={"white"}
              BackColor={"#3449B4"}
              BorderState={false}
              clickEvent={() => {
                console.log("asd");
              }}
            />
          </ButtonWrap>
        </SectionItemWrap>
      </CompnayInforAlign>
    </>
  );
};

const CompnayInforAlign = styled.div`
  margin-top: 20px !important;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 25px;
  & hr {
    background-color: #dddddd;
    height: 2px;
    border: none;
    margin: 20px 0px;
  }
  & > div:nth-child(1) {
    width: 35%;
  }
  & > div:nth-child(2) {
    width: 65%;
  }
  & ul {
    padding: 10px;
    & li {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 500;
      color: #6c6c6c;
    }
  }
`;

const CompanySectionSubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin-bottom: 10px;
`;

const FileWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 한 줄에 두 개씩
  gap: 20px;
  & > div {
    width: 100%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  & > div {
    width: 20%;
  }
`;

export default CompanyApplyLayout;
