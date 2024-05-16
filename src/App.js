import React from 'react'
import './App.css';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import FooterComp from './Components/FooterComp';
import StudentHomePage from './Components/StudentHomePage';
import TeacherHomePage from './Components/TeacherHomePage';
import QuizForm from './Components/CreateQuiz';
import { UploadDoc } from './Components/uploadDoc';
import ViewQuiz from './Components/ViewQuiz';
import Feeback from './Components/Feeback';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <SectionOne/> */}
    <Routes>
      <Route path='/signup' element ={<Signup/>}/>
      <Route path='/home' element={<SectionOne />}/>
      <Route path = '/login' element={<Login/>}/>
      <Route path='/studenthomepage' element={<StudentHomePage/>}/>
      <Route path ='/teacherhomepage' element={<TeacherHomePage/>}/>
      <Route path='/cquiz' element={<QuizForm/>} />
      <Route path='/uploadoc' element={<UploadDoc/>}/>
      <Route path='/viewquiz' element={<ViewQuiz/>} />
      <Route path='/feedback' element={<Feeback/>}/>
      </Routes>
    <FooterComp/>
    </BrowserRouter>
    </>
  );
}

export default App;
