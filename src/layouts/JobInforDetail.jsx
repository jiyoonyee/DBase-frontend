import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import { SectionItemWrap, SectionTitle } from "../style/SectionLayoutStyle";
import KakaoMap from "./KakaoMap";
import CompnayInfor from "../components/CompanyInfor";

const JobInforDetail = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <div style={{ fontSize: "20px" }}>AI,Iot 소프트웨어 개발 직군</div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "#ffffffcc" }}>회사 위치</span>
            <span style={{ color: "#ffffffcc" }}>마감일</span>
          </div>
        </div>
        <SubmitButton
          BackColor={"white"}
          TextColor={"black"}
          Text={"지원하기"}
        />
      </div>
      <CompnayInforAlign>
        <div>
          <SectionItemWrap>
            <CompanyApplicationSection>
              <SectionTitle style={{ marginBottom: "10px" }}>
                AI,IoT 소프트웨어 개발 직군
              </SectionTitle>
              <ul style={{ marginBottom: "20px" }}>
                <li>
                  소프트웨어 개발 분야: 공간 자율운영 솔루션 Alicom의 프론트,
                  백엔드 개발 및 고도화
                </li>
                <li>
                  소프트웨어 개발 분야: 공간 자율운영 솔루션 Alicom의 프론트,
                  백엔드 개발 및 고도화
                </li>
                <li>
                  소프트웨어 개발 분야: 공간 자율운영 솔루션 Alicom의 프론트,
                  백엔드 개발 및 고도화
                </li>
              </ul>

              <CompanyApplicationSalaryWrap>
                <div>
                  <div>급여 (정규직 채용 시)</div>
                  <CompanySectionSubTitle>월급 220만원</CompanySectionSubTitle>
                </div>
                <div>
                  <div>실습 수당 (현장실습 시)</div>
                  <CompanySectionSubTitle>시급 5000원</CompanySectionSubTitle>
                </div>
                <div>
                  <div>근무 형태</div>
                  <CompanySectionSubTitle>월급 220만원</CompanySectionSubTitle>
                </div>
                <div>
                  <div>모집인원</div>
                  <CompanySectionSubTitle>월급 220만원</CompanySectionSubTitle>
                </div>
              </CompanyApplicationSalaryWrap>
              <CompanyApplicationRequirementsWrap>
                <CompanySectionSubTitle>
                  요구조건(우대사항)
                </CompanySectionSubTitle>
                <div>웹, 모바일 서비스 개발 경험</div>
                <ul>
                  <li>AI 알고리즘 개발 경험</li>
                  <li>IoT 모듈 개발 경험</li>
                </ul>
              </CompanyApplicationRequirementsWrap>
            </CompanyApplicationSection>

            <hr />

            <CompanyWorkInforSection>
              <div>
                <CompanySectionSubTitle>근로조건</CompanySectionSubTitle>
                <ul>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                </ul>
              </div>
              <div>
                <CompanySectionSubTitle>근무시간</CompanySectionSubTitle>
                <ul>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                  <li>현장실습 인턴 3개월</li>
                </ul>
              </div>
            </CompanyWorkInforSection>

            <hr />

            <div>
              <CompanySectionSubTitle>기타 요구사항</CompanySectionSubTitle>
              <div>당사는 개쩌는 사람을 원함</div>
            </div>

            <CompanyButtonWrap>
              <SubmitButton
                Text={"추가자료"}
                TextColor={"#6c6c6c"}
                BackColor={"white"}
              />
              <SubmitButton
                Text={"채용의뢰서"}
                TextColor={"white"}
                BackColor={"#3449B4"}
              />
            </CompanyButtonWrap>
          </SectionItemWrap>
          <SectionItemWrap
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SectionTitle>AI 기업 분석</SectionTitle>
            <CompanyAiInforWrap></CompanyAiInforWrap>
            <KitWrap>
              <img src="../src/assets/images/KIT.svg" alt="" />
            </KitWrap>
          </SectionItemWrap>
        </div>
        <div>
          <CompnayInfor />
          <SectionItemWrap>
            <SectionTitle>기업 위치</SectionTitle>

            <KakaoMap></KakaoMap>
          </SectionItemWrap>
        </div>
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
    width: 65%;
  }
  & > div:nth-child(2) {
    width: 35%;
  }
  & ul {
    padding: 10px;
    & li {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const CompanyApplicationSection = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
  & > ul > li {
    color: #6c6c6c;
  }
`;

const CompanyApplicationSalaryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  & > div {
    & > div:nth-child(1) {
      font-size: 16px;
      font-weight: 600;
      color: #6c6c6c;
      margin-bottom: 10px;
    }
  }
`;

const CompanySectionSubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin-bottom: 10px;
`;

const CompanyApplicationRequirementsWrap = styled.div`
  & > div:nth-child(1) {
    font-size: 18px;
    color: #111111;
    font-weight: bold;
    margin-bottom: 15px;
  }
  & > div:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const CompanyWorkInforSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  & > div {
    width: 100%;
  }
`;

const CompanyButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const CompanyAiInforWrap = styled.div`
  border-radius: 10px;
  background-color: #f0f0f0;
  width: 80%;
  height: 300px;
  position: relative;
  border-bottom-right-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    display: block;
    content: "";
    background-color: #f0f0f0;
    clip-path: polygon(0 33%, 0% 100%, 100% 100%);
    width: 80px;
    height: 80px;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
  }
`;

const KitWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(25%);
`;

export default JobInforDetail;
