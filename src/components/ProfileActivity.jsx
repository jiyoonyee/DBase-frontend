import {
  ProfileRecordWrap,
  SectionItemWrap,
  SectionSmallTtile,
  SectionSubTitle,
} from "../style/SectionLayoutStyle";
import StackItem from "./StackItem";

const ProfileActivity = ({
  ActivityDate,
  ActivityTitle,
  ActivityDescription,
}) => {
  return (
    <>
      <ProfileRecordWrap>
        <SectionSmallTtile style={{ fontSize: "14px" }}>
          {ActivityDate}
        </SectionSmallTtile>
        <SectionSubTitle>{ActivityTitle}</SectionSubTitle>
        <SectionSmallTtile>{ActivityDescription}</SectionSmallTtile>
      </ProfileRecordWrap>
    </>
  );
};

export default ProfileActivity;
