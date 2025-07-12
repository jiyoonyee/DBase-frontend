import styled from "styled-components";
import SelectDropDown from "../components/SelectDropDown";
import CompanyItem from "../components/CompanyItem";
import JobInforLayout from "../layouts/JobInforLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import FileUploadInput from "../components/FileUploadInput";

const JobInforPage = ({ loginState }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnlyJobInforPage = location.pathname === "/jobinfor";
  const isJobUploadPage = location.pathname.includes("/jobupload");
  const isJobElementPage = location.pathname.includes("/jobinfor/");
  const isJobInforDetail = location.pathname.includes("/jobinfordetail");
  const isOnlyJobCompanyapplyPage =
    location.pathname === "/jobinfor/companyapply";
  const isOnlyJobCompanyapplyCheckPage =
    location.pathname === "/jobinfor/companyapplycheck";

  return (
    <>
      <Wrap>
        <PageinforWrap>
          <PageTitleWrap>
            {isJobElementPage && (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                ← 채용정보로 돌아가기
              </div>
            )}
            {isOnlyJobInforPage && <PageTitle>채용정보</PageTitle>}
            {isJobUploadPage && <PageTitle>채용의뢰서 등록</PageTitle>}
            {isJobInforDetail && <PageTitle>알리콘</PageTitle>}
            {isOnlyJobCompanyapplyPage && <PageTitle>지원하기</PageTitle>}
            {isOnlyJobInforPage && (
              <PageSubTitle>
                AI 매칭으로 나에게 맞는 채용정보를 찾아보세요
              </PageSubTitle>
            )}
            {isOnlyJobCompanyapplyCheckPage && (
              <PageTitle>지원현황 확인</PageTitle>
            )}
          </PageTitleWrap>
        </PageinforWrap>
        {isOnlyJobInforPage && (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <SubmitButton
              imagePath={"../src/assets/images/Note.svg"}
              BackColor={"white"}
              TextColor={"black"}
              TextSize={"20px"}
              Text={"지원현황 확인"}
              BorderState={false}
              clickEvent={() => {
                navigate("companyapplycheck");
              }}
            />
            {loginState && (
              <SubmitButton
                clickEvent={() => {
                  navigate("/jobinfor/jobupload");
                }}
                imagePath={"../src/assets/images/Note.svg"}
                BackColor={"#3449B4"}
                TextColor={"white"}
                TextSize={"20px"}
                Text={"지원의뢰서 등록"}
                BorderState={false}
              />
            )}
          </div>
        )}

        <Outlet />
        {/* <JobInforLayout></JobInforLayout> */}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(#020619, 0%, #061751, 15%, #0b2da2, 25%, #0c2ca0);
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

export default JobInforPage;
