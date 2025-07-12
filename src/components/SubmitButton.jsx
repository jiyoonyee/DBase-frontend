import styled from "styled-components";

const SubmitButton = ({
  imagePath,
  BackColor,
  TextColor,
  TextSize,
  Text,
  clickEvent,
  BorderState = true,
}) => {
  return (
    <>
      <Wrap
        $BorderState={BorderState}
        onClick={clickEvent}
        style={{
          backgroundColor: BackColor,
          color: TextColor,
          fontSize: TextSize,
        }}
      >
        {imagePath && (
          <img src={imagePath} alt="아이콘" style={{ marginRight: "5px" }} />
        )}
        {Text}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  /* width: 100%; */
  height: 100%;
  border: ${(props) => (props.$BorderState ? "1px" : "0px")} solid #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: 500;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default SubmitButton;
