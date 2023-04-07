import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import LMSMainCompo from './Components/LMSMainCompo';
import TrainerFeedbackComponent from './Components/TrainerFeedbackComponent';
import RateCourseAndTrainer from './Components/RateCourseAndTrainer';
import AllFeedbacks from './Components/AllFeedbacks';
import AllCourses from './Components/AllCourses';
import SaveCourse from './Components/SaveCourse';
export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/hpage' Component={LMSMainCompo} />
        <Route path='/trainer' Component={TrainerFeedbackComponent}/>
        <Route path='/ratecourseandtrainer' Component={RateCourseAndTrainer}/>
        <Route path='/allfeedbacks' Component={AllFeedbacks}/>
        <Route path='/allcourses' Component={AllCourses}/>
        <Route path='/savecourse' Component={SaveCourse}/>
      </Routes>
      </Router>
      

    </div>
  )
}
