import styled from "styled-components";

const RoadMapPage = () => {
  return (
    <>
      <Wrap>
        <PageinforWrap>
          <PageTitleWrap>
            <PageTitle>취업 로드맵</PageTitle>
            <PageSubTitle>
              AI가 분석한 맞춤형 취업 로드맵으로 체계적으로 취업을 준비하세요
            </PageSubTitle>
          </PageTitleWrap>
        </PageinforWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: linear-gradient(#1e0c04, 0%, #4a210e, 15%, #753618, 25%, #ea6727);
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

export default RoadMapPage;
