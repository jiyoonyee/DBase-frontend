import styled from "styled-components";

const SubmitButton = ({ BackColor, TextColor, Text }) => {
  return (
    <>
      <Wrap style={{ backgroundColor: BackColor, color: TextColor }}>
        {Text}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: bold;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default SubmitButton;
