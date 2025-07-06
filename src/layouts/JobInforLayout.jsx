import styled from "styled-components";
import CompanyItem from "../components/CompanyItem";
import SelectDropDown from "../components/SelectDropDown";

const JobInforLayout = () => {
  return (
    <>
      <SearchWrap>
        <InputWrap>
          <a href="#">
            <img src="../src/assets/images/InputSearch.svg" alt="돋보기" />
          </a>
          <input type="text" />
        </InputWrap>
        <SelectDropDown
          DropDownLabel={"연도 선택"}
          DropDownItems={["전체 보기", "2025", "2024"]}
        />
      </SearchWrap>
      <CompnayListWrap>
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          Stacks={"Python,Web,Java,JavaScript"}
        />
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          Stacks={"Python,Web,Java,JavaScript"}
        />
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          Stacks={"Python,Web,Java,JavaScript"}
        />
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          Stacks={"Python,Web,Java,JavaScript"}
        />
        <CompanyItem
          Year={"2025"}
          Name={"슈퍼무브"}
          Field={"개발"}
          Location={"서울특별시 강남구"}
          Deadline={"2025.05.30"}
          Work={"모빌리티 관제 시스템 Web 개발 및 테스트"}
          Stacks={"Python,Web,Java,JavaScript"}
        />
      </CompnayListWrap>
    </>
  );
};

const SearchWrap = styled.div`
  /* width: 100%; */
  /* height: 100px; */
  margin-bottom: 50px !important;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > div {
    width: 100%;
    height: 50px;
  }
  & > div:nth-child(n + 2) {
    width: 15%;
    /* height: 100%; */
  }
`;

const InputWrap = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  & > input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 24px;
    /* height: 0; */
    /* border-radius: 100px; */
  }
`;

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
