import styled from "styled-components";
import Header from "./layouts/Header";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import { useState } from "react";
import JobInforPage from "./pages/JobInforPage";
import JobInforLayout from "./layouts/JobInforLayout";
import JobUploadLayout from "./layouts/JobUploadLayout";
import RoadMapPage from "./pages/RoadMapPage";
import EmploymentStatusPage from "./pages/EmploymentStatusPage";
import JobInforDetail from "./layouts/JobInforDetail";
import CompanyApplyLayout from "./layouts/CompanyApplyLayout";
import CompanyApplytCheck from "./layouts/CompanyApplyCheckLayout";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const [LoginState, setLoginState] = useState(false);
  const [TeacherState, setTeacherState] = useState(false);

  const updateLoginState = (Loginstate, TeacherState) => {
    setLoginState(Loginstate);
    setTeacherState(TeacherState);
  };
  const [headerState, setHeaderState] = useState(false);

  const updateHeaderState = (state) => {
    if (state) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <Header
            updateLoginState={updateLoginState}
            headerState={headerState}
          />
          <Routes>
            <Route
              element={<MainPage updateHeaderState={updateHeaderState} />}
              path="/"
            />
            <Route
              element={<JobInforPage TeacherState={TeacherState} />}
              path="/jobinfor"
            >
              <Route index element={<JobInforLayout />}></Route>
              {/* 선생님 아니면 접근권한 없다고 컷내기 */}
              <Route element={<JobUploadLayout />} path="jobupload"></Route>
              <Route element={<JobInforDetail />} path="jobInforDetail"></Route>
              <Route
                element={<CompanyApplyLayout />}
                path="companyapply"
              ></Route>
              <Route
                element={<CompanyApplytCheck />}
                path="companyapplycheck"
              ></Route>
            </Route>
            <Route path="/roadmap" element={<RoadMapPage />} />
            <Route
              path="/EmploymentStatus"
              element={<EmploymentStatusPage />}
            />
            <Route
              path="/profile"
              element={<ProfilePage LoginState={LoginState} />}
            ></Route>
          </Routes>

          <Footer />
        </Wrap>
      </BrowserRouter>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
