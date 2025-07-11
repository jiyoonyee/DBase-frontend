import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const { kakao } = window;

const KakaoMap = () => {
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
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    if (companyList.length === 0) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.538917, 126.990532),
      });

      marker.companyId = "default";
      kakao.maps.event.addListener(marker, "click", () => {
        console.log("터졌나안터졌나");
      });

      return;
    }

    // 성공 시
    companyList.forEach((company) => {
      geocoder.addressSearch(company.address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          marker.companyId = company.company_id;

          kakao.maps.event.addListener(marker, "click", () => {
            console.log("companyId:", marker.companyId);
          });
        } else {
          console.warn(`주소 변환 실패: ${company.address}`);
        }
      });
    });
  }, [companyList]);

  return <Wrap id="map" />;
};

const Wrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: lightgray;
  border-radius: 10px;
`;

export default KakaoMap;
