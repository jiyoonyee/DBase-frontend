import styled from "styled-components";
import CompanyItem from "../components/CompanyItem";
import SearchCompanyInput from "../components/SearchCompanyInput";
import { useEffect, useState } from "react";

const JobInforLayout = () => {
  const [Companys, setCompanys] = useState(null);

  const getCompnay = async () => {
    try {
      const res = await fetch(`http://localhost:4433/job`);
      const data = await res.json();
      if (data.success) {
        setCompanys(data.result.slice().reverse());
      }
      console.log(data);
      console.log(Companys);
    } catch (error) {
      console.error("로드맵 요청 실패:", error);
    }
  };

  useEffect(() => {
    getCompnay();
  }, []);

  return (
    <>
      <SearchCompanyInput
        DropDownItems={[
          { ItemName: "전체 선택", ReqName: "*" },
          { ItemName: "2025", ReqName: "2025" },
        ]}
        DropDownLabel={"연도 선택"}
        Placeholder={"회사명으로 검색"}
      />
      <CompnayListWrap>
        {Companys &&
          Companys.map((item, i) => (
            <CompanyItem
              key={i}
              Year={item.year}
              Name={item.company_name}
              Field={item.business_type}
              Location={item.address}
              Deadline={item.deadline}
              Work={item.main_business}
              id={item.id}
            />
          ))}
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
