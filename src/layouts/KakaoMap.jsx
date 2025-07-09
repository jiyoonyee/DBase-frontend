import { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <Wrap id="map"></Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  border-radius: 10px;
`;

export default KakaoMap;
