import styled from "styled-components";
import {
  SectionItemWrap,
  SectionSmallTtile,
  SectionTitle,
  UserCompanyState,
  UserState,
} from "../style/SectionLayoutStyle";
import ProfileProject from "../components/ProfileProject";
import ProfileActivity from "../components/ProfileActivity";
import ProfileAward from "../components/ProfileAward";
import StackItem from "../components/StackItem";
import SubmitButton from "../components/SubmitButton";

const ProfilePage = () => {
  return (
    <>
      <Wrap>
        <PageinforWrap>
          <PageTitleWrap>
            <PageTitle>프로필</PageTitle>
            <PageSubTitle>
              나의 역량과 경험을 체계적으로 관리하세요
            </PageSubTitle>
          </PageTitleWrap>
        </PageinforWrap>
        <ProfileWrapAlign>
          <div>
            <SectionItemWrap>
              <SectionTitle>박현욱</SectionTitle>
              <SectionSmallTtile>
                서울디지텍고등학교 3학년 3반
              </SectionSmallTtile>
              <div style={{ display: "flex" }}>
                <UserState $State={"재학"}>재학생</UserState>
              </div>
              <SectionSmallTtile>email</SectionSmallTtile>
              <SectionSmallTtile>callNumber</SectionSmallTtile>
              <SectionSmallTtile>Address</SectionSmallTtile>
              <SubmitButton TextColor={"#6c6c6c"} Text={"정보 수정"} />
            </SectionItemWrap>
            <SectionItemWrap>
              <SectionTitle>취업현황</SectionTitle>
              <div style={{ display: "flex", gap: "10px" }}>
                <UserCompanyState $State={true}>취업 완료 </UserCompanyState>
                <UserCompanyState $State={false}>구직중 </UserCompanyState>
              </div>
              <SectionSmallTtile>백엔드 개발자</SectionSmallTtile>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SectionSmallTtile>회사명</SectionSmallTtile>
                <SectionSmallTtile>근무 기간</SectionSmallTtile>
              </div>
            </SectionItemWrap>
          </div>
          <div>
            <SectionItemWrap>
              <SectionTitle>기술 스택</SectionTitle>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <StackItem Stack={"JAVA"} />
                <StackItem Stack={"JavaScript"} />
                <StackItem Stack={"Python"} />
                <StackItem Stack={"C"} />
                <StackItem Stack={"C++"} />
                <StackItem Stack={"C#"} />
                <StackItem Stack={"MongoDB"} />
                <StackItem Stack={"Node.js"} />
                <StackItem Stack={"Express"} />
                <StackItem Stack={"Linux"} />
                <StackItem Stack={"AmazonAWS"} />
                <StackItem Stack={"Flask"} />
              </div>
            </SectionItemWrap>
            <SectionItemWrap>
              <SectionTitle>프로젝트</SectionTitle>
              <ProfileProject />
              <ProfileProject />
            </SectionItemWrap>
            <SectionItemWrap>
              <SectionTitle>경험 / 활동 / 교육</SectionTitle>
              <ProfileActivity />
              <ProfileActivity />
            </SectionItemWrap>
            <SectionItemWrap>
              <SectionTitle>자격 / 어학 / 수상</SectionTitle>
              <ProfileAward />
              <ProfileAward />
            </SectionItemWrap>
          </div>
        </ProfileWrapAlign>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #001300 0%,
    #072807 25vh,
    #1b3d1b 50vh,
    #3c6b39 75vh,
    #6dba69 100vh
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

const ProfileWrapAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
  & > div:nth-child(1) {
    width: 30%;
  }
  & > div:nth-child(2) {
    width: 70%;
  }
`;

export default ProfilePage;
