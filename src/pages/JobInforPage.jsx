import styled from "styled-components";
import SelectDropDown from "../components/SelectDropDown";
import CompanyItem from "../components/CompanyItem";
import JobInforLayout from "../layouts/JobInforLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const JobInforPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnlyJobInforPage = location.pathname === "/jobinfor";
  const isJobUploadPage = location.pathname.includes("/jobinfor/jobupload");
  const isJobElementPage = location.pathname.includes("/jobinfor/");

  return (
    <>
      <Wrap>
        <JobInforWrap>
          <PageTitleWrap>
            {isJobElementPage && (
              <div
                onClick={() => {
                  navigate(-1);
                }}
              >
                ← 채용정보로 돌아가기
              </div>
            )}
            {isOnlyJobInforPage && <PageTitle>채용정보</PageTitle>}
            {isJobUploadPage && <PageTitle>채용의뢰서 등록</PageTitle>}
            <PageSubTitle>
              AI 매칭으로 나에게 맞는 채용정보를 찾아보세요
            </PageSubTitle>
          </PageTitleWrap>
        </JobInforWrap>
        <Outlet />
        {/* <JobInforLayout></JobInforLayout> */}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;

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

const JobInforWrap = styled.div`
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
