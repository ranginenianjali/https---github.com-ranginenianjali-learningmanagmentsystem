import React, { useState } from 'react'
import CourseServices from '../Services/CourseServices';
import { useNavigate } from 'react-router-dom';

export default function RateCourseAndTrainer() {
    const [uname,setUname] = useState('');
    const [tname,setTname] = useState('');
    const [feedback,setFeedback] = useState('');
    const navigate = useNavigate();

    const submitBtn = (event) => 
    {
        event.preventDefault();
        const response = {
            u_name:uname,
            t_name:tname,
            feedback
        }
        CourseServices.saveFeedbacks(response).then((response)=>{
            alert("Data Saved Successfully")
            navigate("/allfeedbacks")
        }).catch((e)=>console.log(e.message))
    }

  return (
    <div className='container'>
        <h1 className='text-center text-success'>Course Trainer Feedback</h1>
        <form>
            <label htmlFor="" className='form-label'>User Name</label>
            <input type="text"className='form-control' value={uname} onChange={(e)=>setUname(e.target.value)}/>
            <label htmlFor="" className='form-label'>Trainer Name</label>
            <input type="text" className='form-control' value={tname} onChange={(e)=>setTname(e.target.value)}/>
            <label htmlFor="" className='form-label'>Feedback</label>
            <textarea className='form-control' rows={5} cols={5} value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
            <button className="btn btn-primary my-2" onClick={submitBtn}>Submit Feedback</button>

        </form>
    </div>  
  )
}
