import styled from "styled-components";
import { useState } from "react";
import SearchCompanyInput from "../components/SearchCompanyInput";
import CompanyApplyItem from "../components/CompanyApplyItem";

const CompanyApplyCheck = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("전체");

  const handleSearch = (text, selectedStatus) => {
    setSearchText(text);
    setStatusFilter(selectedStatus);
  };

  return (
    <>
      <SearchCompanyInput
        DropDownItems={[
          { ItemName: "전체", ReqName: "전체" },
          { ItemName: "제출완료", ReqName: "제출완료" },
          { ItemName: "반려", ReqName: "반려" },
          { ItemName: "미확인", ReqName: "미확인" },
        ]}
        DropDownLabel={"제출 상태"}
        Placeholder={"회사명으로 검색"}
        onSearch={handleSearch}
      />
      <CompanyApplyItemWrap>
        <CompanyApplyItem searchText={searchText} statusFilter={statusFilter} />
      </CompanyApplyItemWrap>
    </>
  );
};

const CompanyApplyItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export default CompanyApplyCheck;
