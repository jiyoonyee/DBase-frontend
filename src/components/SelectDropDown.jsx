import { useState } from "react";
import styled from "styled-components";

const SelectDropDown = ({
  DropDownLabel,
  DropDownItems,
  DropDwonItemColor,
  UpdateSelectValue,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  const UpdateDropDown = () => {
    setMenuOpen(!menuOpen);
  };

  const UpdateValue = (e) => {
    const value = e.target.textContent;
    setSelectValue(value); // 상태 업데이트
    UpdateDropDown(); // 드롭다운 닫기
    UpdateSelectValue(value); // 즉시 클릭한 값을 부모에 전달
  };

  console.log(menuOpen);

  return (
    <>
      <Wrap>
        <DropDownWrap $State={menuOpen} onClick={UpdateDropDown}>
          <span>
            {selectValue ? (
              <p style={{ color: "black" }}>{selectValue}</p>
            ) : (
              DropDownLabel
            )}
          </span>
          <img src="../src/assets/images/DownArrow.svg" alt="드롭다운 화살표" />
        </DropDownWrap>
        <DropDownItemsWrap $State={menuOpen}>
          {DropDownItems.map((item, i) => (
            <DropDownItem
              onClick={UpdateValue}
              key={i}
              $HoverColor={DropDwonItemColor}
            >
              {item}
            </DropDownItem>
          ))}
        </DropDownItemsWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DropDownWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  cursor: pointer;

  & > span {
    color: #6c6c6c;
    /* font-weight: bold; */
    font-size: 20px;
    width: 100%;
  }
  & > img {
    transform: rotate(${(props) => (props.$State ? "180deg" : "0deg")});
    transition: transform 0.5s ease; // 부드러운 회전 추가
  }
`;

const DropDownItemsWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  max-height: ${(props) => (props.$State ? "1000px" : "0px")}; // ✅ 동적 높이
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding-top 0.5s ease-in-out,
    opacity 0.7s ease-in-out;
  z-index: 20;
  background-color: #ffffff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-top: ${(props) =>
    props.$State ? "20px" : "0px"}; // 부드러운 padding 추가
  opacity: ${(props) => (props.$State ? "1" : "0")};
  transform: translateY(-20px);
`;

const DropDownItem = styled.div`
  width: 100%;
  height: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.$HoverColor};
    /* background-color: #078bff; */
  }
`;

export default SelectDropDown;
