import styled from "styled-components";
import SelectDropDown from "./SelectDropDown";

const SearchCompanyInput = ({ DropDownItems, DropDownLabel }) => {
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
          DropDownItems={[
            { ItemName: "전체선택", ReqName: "all" },
            { ItemName: "2025", ReqName: "2025" },
          ]}
          DropDwonItemColor={"#078bff"}
        />
      </SearchWrap>
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

export default SearchCompanyInput;
