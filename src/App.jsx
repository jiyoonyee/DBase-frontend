import styled from "styled-components";
import Header from "./layouts/Header";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import { useState } from "react";
import JobInforPage from "./pages/JobInforPage";

const App = () => {
  const [headerState, setHeaderState] = useState(false);

  const updateHeaderState = (state) => {
    if (state) {
      setHeaderState(true);
      console.log("헤더 늘리기");
    } else {
      console.log("줄이기");
      setHeaderState(false);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <Header headerState={headerState} />
          <Routes>
            <Route
              element={<MainPage updateHeaderState={updateHeaderState} />}
              path="/"
            />
            <Route element={<JobInforPage />} path="/jobinfor" />
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
