import { useRef, useState } from "react";

import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";

const JobUploadLayout = () => {
  const [nextPage, setNextPage] = useState(0);

  const [jobFileName, setJobFileName] = useState("");
  const [jobFilePlusName, setJobFilePlusName] = useState("");
  const [CompanyInfor, setCompanyInfor] = useState(null);

  let deadline = "";
  let companyName = "";
  let companyYear = "";
  let comapnyWork = "";
  let companyBusiness = "";
  let companyEmployees = "";
  let comapnyMainBusiness = "";
  let companyWebsite = "";
  let companyAddress = "";

  const handleJobFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const decodedName = decodeURIComponent(file.name);
      setJobFileName(decodedName);
    }
  };

  const handleJobFilePlusChange = (e) => {
    const file = e.target.files[0];
    if (file) setJobFilePlusName(file.name);
  };

  const validatePage0 = () => {
    deadline = document.getElementById("UploadDeadLine").value.trim();

    if (!deadline || !jobFileRef.current?.files[0]) {
      alert("지원마감일, 채용의뢰서를 모두 입력해주세요.");
      return false;
    }
    handleFirstFormSubmit();
    return true;
  };

  const UploadDeadLine = document
    .getElementById("UploadDeadLine")
    ?.value.trim();

  const validatePage1 = () => {
    const companyName = document
      .getElementById("CompanyNameInput2")
      ?.value.trim();
    const year = document.getElementById("CompanyYearInput2")?.value.trim();
    const work = document.getElementById("CompanyWorkInput2")?.value.trim();
    const employees = document
      .getElementById("CompanyemployeesInput2")
      ?.value.trim();
    const homepage = document.getElementById("CompanyWebsite")?.value.trim();
    const address = document
      .getElementById("CompanyAdressInput2")
      ?.value.trim();

    if (!companyName || !year || !work || !employees || !homepage || !address) {
      alert("기업 기본 정보를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  // const validatePage2 = () => {
  //   const job = document.querySelector('input[placeholder="기타"]');
  //   const jobText = job && !job.disabled ? job.value.trim() : "";

  //   const fields = document.querySelectorAll("input[type=text], textarea");

  //   const requiredFilled = Array.from(fields).every((field) => {
  //     return field.disabled || field.value.trim() !== "";
  //   });

  //   if (!requiredFilled) {
  //     alert("모든 채용 정보를 입력해주세요.");
  //     return false;
  //   }
  //   return true;
  // };

  const handleNextPage = () => {
    let isValid = true;

    if (nextPage === 0) isValid = validatePage0();
    // else if (nextPage === 1) isValid = validatePage1();
    // else if (nextPage === 2) isValid = validatePage2();

    if (!isValid) return;

    if (nextPage !== 2) {
      setNextPage((prev) => (prev + 1) % 3);
    }

    if (nextPage === 2) {
      // handleSubmit();
    }
  };
  const handlebeforePage = () => {
    if (nextPage === 0) return; // 첫 페이지일 경우 아무것도 하지 않음
    setNextPage(nextPage - 1);
  };

  const jobFileRef = useRef(null);
  const jobFilePlusRef = useRef(null);

  const handleFirstFormSubmit = () => {
    const formData = new FormData();

    const jobFile = jobFileRef.current.files[0];
    const jobFilePlus = jobFilePlusRef.current.files[0];

    if (jobFile) {
      formData.append("file", jobFile);
    }

    if (jobFilePlus) {
      formData.append("etcFile", jobFilePlus);
    }

    fetch(
      `http://localhost:4433/job/input?fileName=${jobFileName}&etcFileName=${jobFilePlusName}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        // console.log(res);
        // console.log(res.json());
        // console.log(res.data);
        const result = res.json();

        if (result.success) {
          setCompanyInfor(result.companyInfor);
        }
      })
      .catch((err) => {
        console.error("업로드 에러:", err);
      });
  };

  return (
    <>
      <JobUplaodForm>
        <FormHeader>
          <div>
            <img src="../src/assets/images/world.svg" alt="지구본" />
            <div>채용의뢰서 등록</div>
          </div>
          <div>기업으로부터 받은 채용 의뢰서와 관련 서류를 업로드하세요.</div>
        </FormHeader>
        <FormWrap $index={nextPage + 1}>
          <JobUploadFileForm>
            <div>
              <SectionTitle>기본정보</SectionTitle>
              <div>
                <div>
                  <InputLabel htmlFor="UploadDeadLine">지원마감일</InputLabel>
                  <InputWrap>
                    <input type="date" id="UploadDeadLine" />
                  </InputWrap>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="../src/assets/images/fileUpload.svg"
                  alt="파일 업로드"
                />
                <SectionTitle>관련 서류 업로드</SectionTitle>
              </div>
              <div>
                <div>
                  <InputLabel>채용의뢰서</InputLabel>
                  <input
                    type="file"
                    id="jobFile"
                    ref={jobFileRef}
                    onChange={handleJobFileChange}
                    accept=".pdf"
                  />
                  <label htmlFor="jobFile">
                    <img
                      src="../src/assets/images/fileUpload.svg"
                      alt="파일 업로드"
                    />

                    <div style={{ textAlign: "center" }}>
                      {jobFileName ? (
                        <div style={{ color: "blue", fontWeight: "bold" }}>
                          선택한 파일: {jobFileName}
                        </div>
                      ) : (
                        <>
                          PDF파일을 업로드하세요 <br />
                          최대 10MB
                        </>
                      )}
                    </div>
                  </label>
                </div>
                <div>
                  <InputLabel $essentialState={true}>추가자료</InputLabel>
                  <input
                    type="file"
                    id="jobFilePlus"
                    ref={jobFilePlusRef}
                    onChange={handleJobFilePlusChange}
                    accept=".pdf"
                  />
                  <label htmlFor="jobFilePlus">
                    <img
                      src="../src/assets/images/fileUpload.svg"
                      alt="파일 업로드"
                    />
                    <div style={{ textAlign: "center" }}>
                      {jobFilePlusName ? (
                        `선택한 파일: ${jobFilePlusName}`
                      ) : (
                        <>
                          PDF파일을 업로드하세요 <br />
                          최대 10MB
                        </>
                      )}
                    </div>
                  </label>
                </div>
              </div>
              <div
                style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
              >
                AI 분석 결과는 참고용이며, 정확하지 않은 정보일 수 있습니다.
                중요한 정보는 반드시 직접 확인해주세요.
              </div>
            </div>
          </JobUploadFileForm>
          <JobUploadCompanyForm>
            <SectionTitle>기업 기본 정보</SectionTitle>
            <div>
              <div>
                <InputLabel htmlFor="CompanyNameInput2">회사명</InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyNameInput2" />
                </InputWrap>
              </div>
              <div>
                <InputLabel htmlFor="CompanyYearInput2">설립연도</InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyYearInput2" />
                </InputWrap>
              </div>
              <div>
                <InputLabel htmlFor="CompanyWorkInput2">업태</InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyWorkInput2" />
                </InputWrap>
              </div>
              <div>
                <InputLabel htmlFor="CompanyemployeesInput2">직원수</InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyemployeesInput2" />
                </InputWrap>
              </div>
            </div>
            <div>
              <div>
                <InputLabel htmlFor="CompanyWorkInput2">
                  주요 사업 내용
                </InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyWorkInput2" />
                </InputWrap>
              </div>
              <div>
                <InputLabel $essentialState={true} htmlFor="CompanyWebsite">
                  홈페이지
                </InputLabel>
                <InputWrap>
                  <input type="text" id="CompanyWebsite" />
                </InputWrap>
              </div>
            </div>
            <div>
              <InputLabel htmlFor="CompanyAdressInput2">소재지</InputLabel>
              <InputWrap>
                <input type="text" id="CompanyAdressInput2" />
              </InputWrap>
            </div>
          </JobUploadCompanyForm>
          <JobUploadCompanyDetailForm>
            <SectionTitle>채용 정보</SectionTitle>
            <div>
              <div>
                <InputLabel>모집 직종</InputLabel>
                <InputWrap>
                  <input type="text" />
                </InputWrap>
              </div>
              <div>
                <InputLabel>모집 인원</InputLabel>
                <InputWrap>
                  <input type="text" />
                </InputWrap>
              </div>
            </div>
            <div>
              <InputLabel>직무 내용(구체적)</InputLabel>
              <TextareaWrap>
                <textarea></textarea>
              </TextareaWrap>
            </div>
            <div>
              <div>
                <InputLabel>자격요건(우대자격)</InputLabel>
                <TextareaWrap>
                  <textarea></textarea>
                </TextareaWrap>
              </div>
              <div>
                <InputLabel>근무 시간</InputLabel>
                <TextareaWrap>
                  <textarea></textarea>
                </TextareaWrap>
              </div>
            </div>
            <div>
              <div>
                <InputLabel>근무형태</InputLabel>
                <InputWrap>
                  <input type="text" />
                </InputWrap>
              </div>
            </div>

            <div>
              <div>
                <InputLabel>실습 수당(현장실습)</InputLabel>
                <InputWrap>
                  <input type="text" />
                </InputWrap>
              </div>
              <div>
                <InputLabel>실습 수당(현장실습)</InputLabel>
                <InputWrap>
                  <input type="text" />
                </InputWrap>
              </div>
            </div>
            <div>
              <InputLabel>근무형태</InputLabel>
              <InputWrap>
                <input type="text" />
              </InputWrap>
            </div>
          </JobUploadCompanyDetailForm>
        </FormWrap>
        <ButtonWrap>
          {/* <button onClick={handlebeforePage}>이전</button>
          <button onClick={handleNextPage}>
            {nextPage == 2 ? "등록" : "다음"}
          </button> */}
          <SubmitButton
            clickEvent={handlebeforePage}
            BackColor={"white"}
            TextColor={"#6c6c6c"}
            TextSize={"16px"}
            Text={"이전"}
          />
          <SubmitButton
            clickEvent={handleNextPage}
            BackColor={"#3449b4"}
            TextColor={"white"}
            TextSize={"16px"}
            Text={nextPage == 2 ? "등록" : "다음"}
          />
        </ButtonWrap>
        <StepBar $index={nextPage + 1}>
          <div></div>
        </StepBar>
      </JobUplaodForm>
    </>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
  width: 100%;
  margin-top: 20px;
  & > div {
    font-weight: 400;
    font-size: 24px;
    width: 15%;
  }
`;

const JobUplaodForm = styled.div`
  color: black;
  /* width: 100%; */
  margin: 0px 200px !important;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    & {
      margin: 0px 20px !important;
    }
  }
`;

const StepBar = styled.span`
  width: 100%;
  height: 15px;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 100;
  background-color: #c2c2c27e;
  /* 게이지바 */
  & > div {
    transform: translateX(-5%);
    transition: all 0.5s ease-in-out;
    height: 100%;
    width: ${(props) => props.$index * 36}%;
    background-color: #6dba69;
    border-radius: 100px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 10px;
    & > div {
      font-weight: bold;
    }
  }
  & > div:nth-child(2) {
    font-size: 16px;
    color: #6c6c6c;
    font-weight: 500;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  background-color: white;
  & > input {
    border: none;
    outline: none;
    background-color: white;
    width: 100%;
  }

  /* 자식 input이 disabled일 때 부모(InputWrap)의 배경색 변경 */
  & > input:disabled {
    background-color: #f0f0f0; /* input 자체 배경색 */
  }

  &:has(> input:disabled) {
    background-color: #f0f0f0; /* InputWrap 배경색도 변경 */
  }
`;

const TextareaWrap = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #cccccc;
  background-color: white;
  width: 100%;
  & > textarea {
    resize: none;
    width: 100%;
    outline: none;
    border: none;
  }
`;

const CheckBoxWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  & > input {
    display: none;
  }
  & > label {
    cursor: pointer;
  }
  & > label:nth-child(3) {
    /* width: ; */
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 15px;
  }
  & > label:nth-child(2) {
    width: 35px;
    height: 35px;

    /* background-color: black; */
    text-align: center;
    border-radius: 5px;
    border: 1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > input:nth-child(3) {
    display: block;
  }

  input:checked + label::before {
    content: "✓";
    background-color: black;
    color: white;
    font-size: 18px;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transform: translateY(5px); */
  }
`;

const FormWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px; /* 폼이 사라질 때 높이 유지용 */

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
  }

  & > div:nth-child(${(props) => props.$index}) {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    position: relative;
  }
`;

const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const InputLabel = styled.label`
  font-size: 16px;
  color: #505050;
  position: relative;

  &::after {
    display: ${(props) => (props.$essentialState ? "none" : "block")};
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translateX(110%) translateY(-20%);
    content: "*";
    color: red;
  }
`;

const JobUploadFileForm = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 20px;
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 50%;

      & > div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 5px;
      }
      & > div > input {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #cccccc;
        font-size: 20px;
        /* padding: 10px; */
        outline: none;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
      & > div {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        width: 100%;
        gap: 5px;
        & > label:nth-child(3) {
          cursor: pointer;
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
    }
  }

  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 20px;

    & > div:nth-child(n + 2) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      & > label {
        &:hover {
          cursor: pointer;
        }
      }
      & > label:nth-child(2) {
        width: 25px;
        height: 25px;
        border: 1px solid #cccccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
      }
      input[type="checkbox"] {
        display: none;
      }

      input:checked + label::before {
        content: "✓";
        background-color: black;
        color: white;
        font-size: 20px;
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  }
`;

const JobUploadCompanyForm = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  /* background-color: aliceblue; */
  & label {
    color: #242424;
    font-weight: 500;
    font-size: 18px;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 5px;
      width: 100%;
    }
    & > div:nth-child(even) {
      width: 30%;
    }
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    & > div {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 5px;
    }
    & > div:nth-child(1) {
      width: 60%;
    }

    & > div:nth-child(2) {
      width: 40%;
    }
  }

  & > div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
`;

const JobUploadCompanyDetailForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    & > div {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 5px;
    }
    & > div:nth-child(1) {
      width: 100%;
    }
    & > div:nth-child(2) {
      width: 30%;
    }
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
  & > div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 50px;
    & > div {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 5px;
      width: 100%;
    }
    & > div:nth-child(2) {
      width: 40%;
    }
  }
  & > div:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    gap: 10px;
    width: 100%;
    & > div {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 5px;
      width: 100%;
    }
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
    & > div:nth-child(2) {
      width: 30%;
    }
  }

  & > div:nth-child(6) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    & > div {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 5px;
    }
  }

  & > div:nth-child(7) {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 5px;
  }
`;
export default JobUploadLayout;
