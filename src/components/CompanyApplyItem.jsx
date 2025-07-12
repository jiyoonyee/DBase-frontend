import { useState } from "react";
import SelectDropDown from "./SelectDropDown";
import SubmitButton from "./SubmitButton";
import FeedbackModal from "./FeedbackModal";
import {
  SectionItemWrap,
  SectionSmallTtile,
  SectionTitle,
} from "../style/SectionLayoutStyle";
import styled from "styled-components";

const CompanyApplyItem = () => {
  const [status, setStatus] = useState("제출완료");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSelectValue = (value) => {
    setStatus(value);
  };

  const handleSubmitFeedback = (feedback) => {
    console.log("📝 반려 피드백:", feedback);
    alert("피드백이 저장되었습니다.");
    // TODO: 서버 전송 추가
  };

  return (
    <>
      <SectionItemWrap>
        <SectionTitle>3-3 박현욱</SectionTitle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: "30%" }}>
            <SectionSmallTtile>알리콘</SectionSmallTtile>
            <SectionSmallTtile>AI, IoT 소프트웨어 개발 직군</SectionSmallTtile>
          </div>
          <ButtonWrap>
            <SelectDropDown
              DropDownItems={[
                { ItemName: "제출완료", ReqName: "제출완료" },
                { ItemName: "반려", ReqName: "반려" },
                { ItemName: "미제출", ReqName: "미제출" },
              ]}
              DropDownLabel={status}
              DropDwonItemColor={"#078bff"}
              UpdateSelectValue={handleSelectValue}
              onBanryeoSelected={() => setShowFeedbackModal(true)}
            />
            <SubmitButton
              Text={"지원서류 다운로드"}
              BorderState={false}
              BackColor={"#3449B4"}
              TextColor={"white"}
            />
          </ButtonWrap>
        </div>
      </SectionItemWrap>

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleSubmitFeedback}
      />
    </>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 10px;
  & > div {
    width: 20%;
  }
`;

export default CompanyApplyItem;
