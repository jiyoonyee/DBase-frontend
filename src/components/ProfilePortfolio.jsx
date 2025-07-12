import { SectionItemWrap, SectionTitle } from "../style/SectionLayoutStyle";
import FileUploadInput from "./FileUploadInput";

const PortfilePortflio = ({ LabelState }) => {
  return (
    <>
      <SectionTitle>포트폴리오</SectionTitle>
      <FileUploadInput LabelState={LabelState}></FileUploadInput>
    </>
  );
};

export default PortfilePortflio;
