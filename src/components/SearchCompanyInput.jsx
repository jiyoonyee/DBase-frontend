import styled from "styled-components";
import { useState } from "react";
import SelectDropDown from "./SelectDropDown";

const SearchCompanyInput = ({
  DropDownItems,
  DropDownLabel,
  Placeholder,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("전체");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value, selectedStatus); // 상태 + 텍스트 모두 전달
  };

  const handleSelectChange = (newStatus) => {
    setSelectedStatus(newStatus);
    onSearch(searchText, newStatus); // 상태 + 텍스트 모두 전달
  };

  return (
    <SearchWrap>
      <InputWrap>
        <a href="#">
          <img src="../src/assets/images/InputSearch.svg" alt="돋보기" />
        </a>
        <input
          type="text"
          placeholder={Placeholder}
          onChange={handleInputChange}
          value={searchText}
        />
      </InputWrap>
      <SelectDropDown
        DropDownLabel={DropDownLabel}
        DropDownItems={DropDownItems}
        DropDwonItemColor={"#078bff"}
        UpdateSelectValue={handleSelectChange}
      />
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
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
    font-size: 20px;
  }
`;

export default SearchCompanyInput;
