
import {
  ProfileRecordWrap,
  SectionItemWrap,
  SectionSmallTtile,
  SectionSubTitle,
} from "../style/SectionLayoutStyle";
import StackItem from "./StackItem";

const ProfileActivity = () => {
  return (
    <>
      <ProfileRecordWrap>
        <SectionSmallTtile>2024.12</SectionSmallTtile>
        <SectionSubTitle>
          서울디지텍고등학교 해킹보안동아리 ROOT
        </SectionSubTitle>
        <SectionSmallTtile>
          C언어, 네트워크, 리눅스를 중심으로 해킹의 기초를 학습
        </SectionSmallTtile>
      </ProfileRecordWrap>
    </>
  );
};

export default ProfileActivity;
