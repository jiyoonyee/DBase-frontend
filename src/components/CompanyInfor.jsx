import { SectionItemWrap, SectionTitle } from "../style/SectionLayoutStyle";
import styled from "styled-components";

const CompnayInfor = () => {
  return (
    <>
      <SectionItemWrap>
        <SectionTitle style={{ marginBottom: "10px" }}>기업정보</SectionTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            기업을 선택해주세요
          </div>
          <div
            style={{
              color: "#6c6c6c",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            업태
          </div>
        </div>
        <hr style={{ marginBottom: "20px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
          }}
        >
          <CompnayInforItem>
            <div>설립연도</div>
            <div>-</div>
          </CompnayInforItem>
          <CompnayInforItem>
            <div>직원 수</div>
            <div>-</div>
          </CompnayInforItem>
          <CompnayInforItem>
            <div>주요 사업 내용</div>
            <div>-</div>
          </CompnayInforItem>
          <CompnayInforItem>
            <div>홈페이지</div>
            <div>-</div>
          </CompnayInforItem>
        </div>
      </SectionItemWrap>
    </>
  );
};

const CompnayInforItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  width: 100%;

  & > div {
    width: 50%;
  }
  & > div:nth-child(1) {
    color: #6c6c6c;
    font-weight: bold;
  }
  & > div:nth-child(2) {
    color: black;
    text-align: end;
    word-break: keep-all;
  }
`;

export default CompnayInfor;
