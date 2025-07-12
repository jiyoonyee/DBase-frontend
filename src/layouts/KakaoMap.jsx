import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const { kakao } = window;

const KakaoMap = ({ onSelectCompany }) => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4433/job/company/employed")
      .then((res) => {
        setCompanyList(res.data);
      })
      .catch((err) => {
        console.error("회사 정보 가져오기 실패:", err);
        setCompanyList([]);
      });
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.538917, 126.990532), // 디지텍
      level: 8,
    };

    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();

    // 디폴트 위치 마커
    const defaultMarker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(37.538917, 126.990532),
    });
    defaultMarker.companyId = "default";
    kakao.maps.event.addListener(defaultMarker, "click", () => {
      console.log("디지텍");
      if (onSelectCompany) onSelectCompany(null);
    });

    // 회사 마커들
    companyList.forEach((companyWrapper) => {
      const address = companyWrapper.company?.address;

      if (!address) {
        console.warn(`주소 없음: company_id=${companyWrapper.company_id}`);
        return;
      }

      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          marker.companyId = companyWrapper.company_id;

          kakao.maps.event.addListener(marker, "click", () => {
            console.log("companyId:", marker.companyId);
            if (onSelectCompany) onSelectCompany(marker.companyId);
          });
        } else {
          console.warn(`주소 변환 실패: ${address}`);
        }
      });
    });
  }, [companyList, onSelectCompany]);

  return <Wrap id="map" />;
};

const Wrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: lightgray;
  border-radius: 10px;
`;

export default KakaoMap;
