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

import HeroAnimation from "../components/HeroAnimation";
import AcountButton from "../components/AcountButton";
import { useState } from "react";
import EditModal from "../components/EditModal";

const ProfilePage = ({ LoginState }) => {
  const [isEditStack, setIsEditStack] = useState(false);
  const [isEditProject, setIsEditProject] = useState(false);
  const [isEditActivity, setIsEditActivity] = useState(false);
  const [isEditAward, setIsEditAward] = useState(false);
  const [isEditProfileInfo, setIsEditProfileInfo] = useState(false);
  const [isEditEmploymentInfo, setIsEditEmploymentInfo] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState(true);

  // Sample profile state
  const [profile, setProfile] = useState({
    name: "박현욱",
    classInfo: "서울디지텍고등학교 3학년 3반",
    email: "user@email.com",
    phone: "010-0000-0000",
    address: "서울시 강서구",
    position: "백엔드 개발자",
    company: "ABC 회사",
    duration: "2023.03 ~ 2024.01",
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <HeroAnimation />
      <Wrap>
        {LoginState ? (
          <>
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
                  <SectionTitle style={{ marginBottom: "0px" }}>
                    <EditInputWrap
                      style={{ fontSize: "24px", fontWeight: "bold" }}
                      disabled={!isEditProfileInfo}
                      value={profile.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </SectionTitle>
                  <SectionSmallTtile>
                    <EditInputWrap
                      style={{ fontSize: "16px", color: "#6c6c6c" }}
                      disabled={!isEditProfileInfo}
                      value={profile.classInfo}
                      onChange={(e) =>
                        handleChange("classInfo", e.target.value)
                      }
                    />
                  </SectionSmallTtile>
                  <div style={{ display: "flex" }}>
                    <UserState $State={"재학"}>재학생</UserState>
                  </div>
                  <SectionSmallTtile style={{ marginBottom: "0px" }}>
                    <EditInputWrap
                      style={{ fontSize: "16px", color: "#6c6c6c" }}
                      disabled={!isEditProfileInfo}
                      value={profile.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </SectionSmallTtile>
                  <SectionSmallTtile style={{ marginBottom: "0px" }}>
                    <EditInputWrap
                      style={{ fontSize: "16px", color: "#6c6c6c" }}
                      disabled={!isEditProfileInfo}
                      value={profile.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </SectionSmallTtile>
                  <SectionSmallTtile>
                    <EditInputWrap
                      style={{ fontSize: "16px", color: "#6c6c6c" }}
                      disabled={!isEditProfileInfo}
                      value={profile.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />
                  </SectionSmallTtile>
                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditProfileInfo ? "저장" : "정보 수정"}
                    clickEvent={() => setIsEditProfileInfo((prev) => !prev)}
                  />
                </SectionItemWrap>

                <SectionItemWrap>
                  <SectionTitle>취업현황</SectionTitle>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <UserCompanyState
                      $State={employmentStatus}
                      onClick={() =>
                        isEditEmploymentInfo &&
                        setEmploymentStatus((prev) => !prev)
                      }
                    >
                      {employmentStatus ? "취업 완료" : "구직중"}
                    </UserCompanyState>
                  </div>

                  <SectionSmallTtile style={{ marginBottom: "0px" }}>
                    <EditInputWrap
                      style={{ fontSize: "16px", color: "#6c6c6c" }}
                      disabled={!isEditEmploymentInfo}
                      value={profile.position}
                      onChange={(e) => handleChange("position", e.target.value)}
                    />
                  </SectionSmallTtile>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      gap: "10px",
                    }}
                  >
                    <SectionSmallTtile style={{ flex: 1 }}>
                      <EditInputWrap
                        style={{ fontSize: "16px", color: "#6c6c6c" }}
                        disabled={!isEditEmploymentInfo}
                        value={profile.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                      />
                    </SectionSmallTtile>
                    <SectionSmallTtile style={{ flex: 1 }}>
                      <EditInputWrap
                        style={{ fontSize: "16px", color: "#6c6c6c" }}
                        disabled={!isEditEmploymentInfo}
                        value={profile.duration}
                        onChange={(e) =>
                          handleChange("duration", e.target.value)
                        }
                      />
                    </SectionSmallTtile>
                  </div>

                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditEmploymentInfo ? "저장" : "정보 수정"}
                    clickEvent={() => setIsEditEmploymentInfo((prev) => !prev)}
                  />
                </SectionItemWrap>
              </div>
              <div>
                <SectionItemWrap>
                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditStack ? "수정" : "편집"}
                    BackColor={"white"}
                    clickEvent={() => setIsEditStack((prev) => !prev)}
                  />
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
                    {/* ... 생략 */}
                  </div>

                  {isEditStack && (
                    <EditModal
                      title="기술 스택 편집"
                      onClose={() => setIsEditStack(false)}
                    >
                      <EditInput placeholder="스택 입력" />
                      <AddButton>추가</AddButton>
                    </EditModal>
                  )}
                </SectionItemWrap>
                <SectionItemWrap>
                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditProject ? "추가" : "편집"}
                    BackColor={"white"}
                    clickEvent={() => setIsEditProject((prev) => !prev)}
                  />
                  <SectionTitle>프로젝트</SectionTitle>
                  {isEditProject && (
                    <EditModal
                      title="프로젝트 추가"
                      onClose={() => setIsEditProject(false)}
                    >
                      <EditInput placeholder="활동 날짜" />
                      <EditInput placeholder="활동명" />
                      <EditInput placeholder="활동 내용" />
                      <AddButton>추가</AddButton>
                    </EditModal>
                  )}
                </SectionItemWrap>
                <SectionItemWrap>
                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditActivity ? "추가" : "편집"}
                    BackColor={"white"}
                    clickEvent={() => setIsEditActivity((prev) => !prev)}
                  />
                  <SectionTitle>경험 / 활동 / 교육</SectionTitle>

                  {/* {isEditActivity && (
                    <EditInputWrap>
                      <EditInput placeholder="활동 날짜" />
                      <EditInput placeholder="활동명" />
                      <EditInput placeholder="활동 내용" />
                    </EditInputWrap>
                  )} */}
                  {isEditActivity && (
                    <EditModal
                      title="활동 내역 추가"
                      onClose={() => setIsEditActivity(false)}
                    >
                      <EditInput placeholder="활동 날짜" />
                      <EditInput placeholder="활동명" />
                      <EditInput placeholder="활동 내용" />
                      <AddButton>추가</AddButton>
                    </EditModal>
                  )}
                </SectionItemWrap>

                <SectionItemWrap>
                  <SubmitButton
                    TextColor={"#6c6c6c"}
                    Text={isEditAward ? "추가" : "편집"}
                    BackColor={"white"}
                    clickEvent={() => setIsEditAward((prev) => !prev)}
                  />
                  <SectionTitle>자격 / 어학 / 수상</SectionTitle>

                  {isEditAward && (
                    <EditModal
                      title="활동 내역 추가"
                      onClose={() => setIsEditAward(false)}
                    >
                      <EditInput placeholder="수상,취득일" />
                      <EditInput placeholder="자격증,수상 명" />
                      <EditInput placeholder="자격증 내용 및 수상 내용" />
                      <AddButton>추가</AddButton>
                    </EditModal>
                  )}
                </SectionItemWrap>
              </div>
            </ProfileWrapAlign>
          </>
        ) : (
          <div
            style={{
              height: "100vh",
              marginTop: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            로그인 후 이용해주세요.
            <AcountButton
              LinkPath={"http://localhost:4433/auth/google"}
              Label={"구글 계정으로 로그인"}
            />
            <div>@sdh.hs.kr 계정만 사용 가능합니다</div>
          </div>
        )}
      </Wrap>
    </>
  );
};

const EditInputWrap = styled.input`
  &:disabled {
    background-color: white;
    /* border: 1px solid #ccc; */
    color: black;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: default;
  }
  &:enabled {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    color: black;
    outline: none;
    font-weight: 500;
    border-radius: 10px;
    padding: 5px;
  }

  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  gap: 10px;
  margin-top: 10px;
  & > input {
    width: 100%;
  }
`;

const EditInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  flex: 1;
`;

const AddButton = styled.button`
  background-color: #3449b4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #2c3ea2;
  }
`;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #001300 0%,
    #072807 25vh,
    #1b3d1b 50vh,
    #3c6b39 75vh,
    #52904f 100vh
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
    & > div {
      position: relative;
      & > div:nth-child(1) {
        height: auto;
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
  }
`;

export default ProfilePage;
