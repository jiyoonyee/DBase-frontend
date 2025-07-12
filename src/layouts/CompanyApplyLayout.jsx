import styled from "styled-components";
import {
  SectionItemWrap,
  SectionSmallTtile,
  SectionSubTitle,
  SectionTitle,
} from "../style/SectionLayoutStyle";
import FileUploadInput from "../components/FileUploadInput";
import SubmitButton from "../components/SubmitButton";
import { useEffect, useState } from "react";
import axios from "axios";

const CompanyApplyLayout = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const companyId = params.get("comapanyId");

    if (companyId) {
      axios
        .get(`http://localhost:4433/job/company?id=${companyId}`)
        .then((res) => {
          setCompany(res.data);
        })
        .catch((err) => {
          console.error("회사 정보를 불러오지 못했습니다:", err);
        });
    }
  }, []);

  if (!company) return <div>불러오는 중...</div>;

  const job = company.jobs && company.jobs.length > 0 ? company.jobs[0] : null;

  return (
    <CompnayInforAlign>
      <SectionItemWrap>
        <SectionTitle>{company.company_name}</SectionTitle>
        <CompanySectionSubTitle style={{ marginBottom: "30px" }}>
          {job?.job_title || "직무 정보 없음"}
        </CompanySectionSubTitle>
        <SectionSmallTtile>
          <img src="../src/assets/images/CLocation.svg" alt="" />
          {company.address}
        </SectionSmallTtile>
        <SectionSmallTtile>
          <img src="../src/assets/images/CDeadline.svg" alt="" />
          마감: {company.deadline}
        </SectionSmallTtile>
        <SectionSmallTtile>
          <img src="../src/assets/images/CWork.svg" alt="" />
          {company.main_business}
        </SectionSmallTtile>
        <hr />
        <SectionSubTitle style={{ marginBottom: "20px" }}>
          자격요건 (우대자격)
        </SectionSubTitle>
        <div>
          <SectionSmallTtile style={{ marginBottom: "5px" }}>
            {job?.qualifications || "자격요건 없음"}
          </SectionSmallTtile>
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
          <FileUploadInput LabelName={"이력서 + 자기소개서"} />
          <FileUploadInput LabelName={"포트폴리오"} />
          <FileUploadInput LabelName={"기타"} LabelState={false} />
        </FileWrap>

        <ButtonWrap>
          <SubmitButton
            Text={"지원서 제출"}
            TextColor={"white"}
            BackColor={"#3449B4"}
            BorderState={false}
            clickEvent={() => {
              console.log("지원서 제출");
            }}
          />
        </ButtonWrap>
      </SectionItemWrap>
    </CompnayInforAlign>
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
  grid-template-columns: repeat(2, 1fr);
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
