import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import AcountButton from "../components/AcountButton";

const Header = ({ updateLoginState, headerState }) => {
  // const cookies = new Cookies();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4433/user/profile", {
      method: "GET",
      credentials: "include", // ✅ 이걸 반드시 설정해야 쿠키 전송됨
    })
      .then((res) => res.json())
      .then((data) => {
        // ex: { name: "김지윤", email: "...", ... }

        if (data.statusCode != 401) {
          setUser(data);
          updateLoginState(true);
        }
      });
  }, [updateLoginState]);
  return (
    <Wrap $shrink={headerState}>
      <HeaderWrap>
        <LogoWrap>
          <Link to={"/"}>
            <img src="../src/assets/images/Logo.svg" alt="logo" />
          </Link>
        </LogoWrap>
        <MenuWrap>
          <Link to={"/jobinfor"}>채용정보</Link>
          <Link to={"/"}>내프로필</Link>
          <Link to={"/"}>취업현황</Link>
          <Link to={"/roadmap"}>취업 로드맵</Link>
        </MenuWrap>

        {user ? (
          <div style={{ color: "white" }}>{user.name}님</div>
        ) : (
          <AcountButton
            LinkPath={"http://localhost:4433/auth/google"}
            Label={"구글 로그인"}
          />
        )}
      </HeaderWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  color: white;
  width: 100%;
  height: ${(props) => (props.$shrink ? "50px" : "100px")};
  /* padding: ${(props) => (props.$shrink ? "5px 0px" : "30px 0px")}; */
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  background-color: transparent;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.199);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7.9px);
  z-index: 999;
  /* height: ; */
`;

const HeaderWrap = styled.div`
  height: 100%;
  margin: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: white; */
  & * {
    font-size: 18px;
    /* font-weight: bold; */
  }
`;

const LogoWrap = styled.div``;

const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  & > a {
    color: white;
  }
`;

export default Header;
