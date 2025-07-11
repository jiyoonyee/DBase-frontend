import styled from "styled-components";
import CompanyItem from "../components/CompanyItem";
import SearchCompanyInput from "../components/SearchCompanyInput";

const JobInforLayout = () => {
  return (
    <>
      <SearchCompanyInput />
      <CompnayListWrap>
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          id={"1"}
        />
      </CompnayListWrap>
    </>
  );
};

const CompnayListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  & > div {
    width: calc((100% - 100px) / 3); // 3개 + gap 50px * 2
  }

  @media screen and (max-width: 1000px) {
    & > div {
      width: calc((100% - 50px) / 2); // 2개
    }
  }

  @media screen and (max-width: 600px) {
    & > div {
      width: 100%; // 1개
    }
  }
`;

export default JobInforLayout;
