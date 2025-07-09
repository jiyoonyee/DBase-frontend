import styled from "styled-components";
import SelectDropDown from "../components/SelectDropDown";
import SubmitButton from "../components/SubmitButton";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const RoadMapPage = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("../src/assets/markdowns/test.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <>
      <Wrap>
        <PageinforWrap>
          <PageTitleWrap>
            <PageTitle>취업 로드맵</PageTitle>
            <PageSubTitle>
              AI가 분석한 맞춤형 취업 로드맵으로 체계적으로 취업을 준비하세요
            </PageSubTitle>
          </PageTitleWrap>
        </PageinforWrap>
        <RoadMapSecitonWrap>
          <SectionTitle>로드맵 설정</SectionTitle>
          <div>
            <SectionSubTtile>
              희망 직무를 선택하면 AI가 맞춤형 로드맵을 생성합니다
            </SectionSubTtile>
            <div>
              <SelectDropDown
                DropDownLabel={"희망 직무 선택"}
                DropDownItems={[
                  "웹-프론트엔드",
                  "웹-백엔드",
                  "서버 엔지니어",
                  "AI 엔지니어",
                  "앱 개발",
                  "정보보안",
                ]}
                DropDwonItemColor={"#f9822d"}
              />
              <SelectDropDown
                DropDownLabel={"목표 기간"}
                DropDownItems={["1개월", "3개월", "6개월"]}
                DropDwonItemColor={"#f9822d"}
              />
              <SubmitButton
                Text={"로드맵 생성"}
                BackColor={"#CE622C"}
                TextColor={"white"}
                imagePath={"../src/assets/images/RoadMapWhite.svg"}
              />
            </div>
          </div>
        </RoadMapSecitonWrap>
        <RoadMapSecitonWrap>
          <SectionTitle style={{ marginBottom: "30px" }}>
            로드맵을 선택해주세요
          </SectionTitle>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </RoadMapSecitonWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    #1e0c04 0%,
    #4a210e 10%,
    #753618 25%,
    #ea6727 60%,
    #ff8c42 100%
  );
  color: white;
  padding-bottom: 100px;
  & > div {
    margin: 0px 200px;
  }
  @media screen and (max-width: 1000px) {
    & > div {
      margin: 0px 20px;
    }
  }
`;

const PageinforWrap = styled.div`
  /* height: 100%; */

  /* background-color: #95a8b93b; */
  margin-top: 100px !important;
  padding: 50px 0px;
`;

const PageTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 30px;
`;

const PageTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const PageSubTitle = styled.div`
  font-size: 20px;
`;

const RoadMapSecitonWrap = styled.div`
  /* height: 100px; */
  padding: 40px 20px;
  background-color: white;
  border-radius: 10px;
  color: black;
  margin-bottom: 30px !important;

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      width: 100%;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;
      & > div {
        width: 25%;
      }
    }
  }
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const SectionSubTtile = styled.div`
  font-size: 18px;
  color: #6c6c6c;
`;
export default RoadMapPage;
