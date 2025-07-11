import SearchCompanyInput from "../components/SearchCompanyInput";

const CompanyApplytCheck = () => {
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
      />
    </>
  );
};

export default CompanyApplytCheck;
