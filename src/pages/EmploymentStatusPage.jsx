import styled from "styled-components";
import KakaoMap from "../layouts/KakaoMap";
import {
  SectionItemWrap,
  SectionSubTtile,
  SectionTitle,
} from "../style/SectionLayoutStyle";
import EmployeeItem from "../components/EmployeeItem";
import CompnayInfor from "../components/CompanyInfor";

const EmploymentStatusPage = () => {
  return (
    <>
      <Wrap>
        <PageinforWrap>
          <PageTitleWrap>
            <PageTitle>취업 현황</PageTitle>
            <PageSubTitle>
              학생들의 취업 현황을 지도로 확인해보세요
            </PageSubTitle>
          </PageTitleWrap>
        </PageinforWrap>
        <SectionWrap>
          <div>
            <SectionItemWrap>
              <SectionMapalign>
                <SectionTitle>취업 현황 지도</SectionTitle>
                <SectionSubTtile>
                  학생들이 재직 중인 회사 위치를 확인하세요
                </SectionSubTtile>
                <KakaoMap />
              </SectionMapalign>
            </SectionItemWrap>
            <SectionItemWrap>
              <SectionMenualign>
                <SectionTitle>선택된 회사 정보</SectionTitle>
                <div
                  style={{
                    fontSize: "18px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  기업을 선택하세요
                </div>
                <SectionSubTtile>-</SectionSubTtile>
                <MakerMenuWrap>
                  <MakerItem>지하철</MakerItem>
                  <MakerItem>식당</MakerItem>
                  <MakerItem>카페</MakerItem>
                </MakerMenuWrap>
              </SectionMenualign>
            </SectionItemWrap>
          </div>
          <div>
            <CompnayInfor />
            <SectionItemWrap>
              <SectionTitle style={{ marginBottom: "5px" }}>
                재직자
              </SectionTitle>
              <SectionSubTtile style={{ marginBottom: "20px" }}>
                알리콘
              </SectionSubTtile>
              <EmployeeWrap>
                <EmployeeItem />
                <EmployeeItem />
                <EmployeeItem />
                <EmployeeItem />
                <EmployeeItem />
                <EmployeeItem />
                <EmployeeItem />
              </EmployeeWrap>
            </SectionItemWrap>
          </div>
        </SectionWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    #0e0219 0%,
    #351452 10%,
    #3e1a5c 25%,
    #5c258c 60%,
    #aa49ff 100%
  );
  color: white;
  padding-bottom: 100px;
  & > div {
    margin: 0px 200px;
  }
  @media screen and (max-width: 1000px) {
    & > div {
      margin: 0px 20px;
    }
  }
`;

const PageinforWrap = styled.div`
  /* height: 100%; */

  /* background-color: #95a8b93b; */
  margin-top: 100px !important;
  padding: 50px 0px;
`;

const PageTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 30px;
`;

const PageTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const PageSubTitle = styled.div`
  font-size: 20px;
`;

const SectionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & > div:nth-child(1) {
    width: 70%;
  }

  & > div:nth-child(2) {
    width: 30%;
  }
`;

const SectionMapalign = styled.div`
  /* height: 100px; */
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
`;

const SectionMenualign = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
`;

const MakerMenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const MakerItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  aspect-ratio: 16 / 5;
`;

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

const EmployeeWrap = styled.div`
  overflow-y: auto;
  height: 250px;
  padding-right: 20px;
  /* 스크롤바 전체 영역 */
  &::-webkit-scrollbar {
    display: block;
    width: 8px;
  }

  /* 스크롤바 트랙 (배경) */
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 4px;
  }

  /* 스크롤바 핸들 (움직이는 부분) */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* 스크롤바 핸들 호버 시 색상 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default EmploymentStatusPage;
