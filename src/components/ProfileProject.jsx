import styled from "styled-components";
import {
  ProfileRecordWrap,
  SectionItemWrap,
  SectionSmallTtile,
  SectionSubTitle,
} from "../style/SectionLayoutStyle";
import StackItem from "./StackItem";

const ProfileProject = () => {
  return (
    <>
      <ProfileRecordWrap>
        <SectionSubTitle>
          웹/앱 경진대회 LANGFIT - AI 기반 프로그래밍 언어 추천 서비스
        </SectionSubTitle>
        <SectionSmallTtile>
          MBTI 기반 개인 맞춤형 프로그래밍 언어 추천 및 AI 챗봇을 활용한 학습
          플랫폼
        </SectionSmallTtile>
        <div style={{ display: "flex", gap: "10px" }}>
          <StackItem Stack={"Python"} />
          <StackItem Stack={"JavaScript"} />
        </div>
      </ProfileRecordWrap>
    </>
  );
};

export default ProfileProject;
