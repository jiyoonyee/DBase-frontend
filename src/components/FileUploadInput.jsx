import styled from "styled-components";

const FileUploadInput = ({ LabelName, LabelState = true }) => {
  return (
    <Wrap>
      <div>
        <InputLabel $state={LabelState}>{LabelName}</InputLabel>
        <input type="file" id="jobFile" />
        <label htmlFor="jobFile">
          <img src="../src/assets/images/fileUpload.svg" alt="파일 업로드" />
          <div>PDF파일을 업로드하세요</div>
          <div>최대 10MB</div>
        </label>
      </div>
    </Wrap>
  );
};
const InputLabel = styled.label`
  font-size: 16px;
  color: #111111;
  font-weight: bold;
  position: relative;

  &::after {
    display: ${(props) => (props.$state ? "block" : "none")};
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translateX(110%) translateY(-20%);
    content: "*";
    color: red;
  }
`;
const Wrap = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    & > label:nth-child(3) {
      width: 100%;
      /* background-color: #cccccc; */
      aspect-ratio: 16 / 6;
      border: 3px dashed #a1a1a1;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      color: #a1a1a1;
      cursor: pointer;
      & > img {
        width: 25px;
      }
    }

    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

export default FileUploadInput;
