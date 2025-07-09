import styled from "styled-components";
import CompanyStackItem from "./CompanyStackItem";
import SubmitButton from "./SubmitButton";

const EmployeeItem = ({ Stacks }) => {
  //   const StacksList = Stacks.split(",");
  const StacksList = ["JavaScript", "Nest.js", "express"];
  return (
    <>
      <Wrap>
        <EmployeeInforWrap>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              letterSpacing: "18px",
            }}
          >
            이*우
          </div>
          <div style={{ fontSize: "16px", color: "#6c6c6c" }}>2024.12.12 ~</div>
        </EmployeeInforWrap>
        <CompanyStackWrap>
          {StacksList.map((text, index) => (
            <CompanyStackItem Stack={text} key={index} />
          ))}
        </CompanyStackWrap>
        <SubmitButton TextColor={"black"} Text={"재직 선배 프로필 보기"} />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  & > div {
    width: 100%;
  }
`;

const EmployeeInforWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyStackWrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export default EmployeeItem;
