import styled from "styled-components";
import SelectDropDown from "../components/SelectDropDown";

const JobInforPage = () => {
  return (
    <>
      <Wrap>
        <JobInforWrap>
          <PageTitleWrap>
            <PageTitle>채용정보</PageTitle>
            <PageSubTitle>
              AI 매칭으로 나에게 맞는 채용정보를 찾아보세요
            </PageSubTitle>
          </PageTitleWrap>
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
        </JobInforWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(#020619, 0%, #061751, 15%, #0b2da2, 25%, #0c2ca0);
  color: white;

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
  padding-bottom: 50px;
`;

const PageTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const PageSubTitle = styled.div`
  font-size: 20px;
`;

const SearchWrap = styled.div`
  width: 100%;
  /* height: 100px; */
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

export default JobInforPage;
