import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import FooterComp from "./Components/FooterComp";
import StudentHomePage from "./Components/StudentHomePage";
import TeacherHomePage from "./Components/TeacherHomePage";
import QuizForm from "./Components/CreateQuiz";
import { UploadDoc } from "./Components/uploadDoc";
import ViewQuiz from "./Components/ViewQuiz";
import LeaderBoard from "./Components/LeaderBoard";
import CommentForm from "./Components/CommentForm";
import LandingPage from "./Components/LandingPage";
import AttemptQuiz from "./Components/AttemptQuiz";
import ViewDocs from "./Components/ViewDocs";
import Blog from "./Components/Blog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studenthomepage" element={<StudentHomePage />} />
          <Route path="/teacherhomepage" element={<TeacherHomePage />} />
          <Route path="/cquiz" element={<QuizForm />} />
          <Route path="/uploadoc" element={<UploadDoc />} />
          <Route path="/viewquiz" element={<ViewQuiz />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/comment" element={<CommentForm />} />
          <Route path="/attempt" element={<AttemptQuiz/>} />
          <Route path='/viewdocs' element={<ViewDocs/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
