import React, { useEffect, useState } from 'react'
import CourseServices from '../Services/CourseServices';
import { useNavigate } from 'react-router-dom';

export default function SaveCourse() {
    const [c_name,setCname] = useState('');
    const [t_name,setTname] = useState('');
    const navigate = useNavigate();

    const submitHandler = (event) => 
    {
        event.preventDefault();
        const object = {
            c_name,
            t_name
        }
        CourseServices.createCourse(object).then((response)=>{
            console.log(response.data)
            alert("Course Saved Successfully")
            navigate('/allcourses')
        }).catch((error)=>console.log(error.message))
    }
    
  return (
    <div className='container'>
        <h1 className='text-center text-primary'>Add New Course</h1>
        <form>
            <label htmlFor="" className='form-label'>Course Name</label>
            <input type="text" className='form-control'onChange={(e)=>setCname(e.target.value)} value={c_name}/>
            <label htmlFor="" className='form-label'>Trainer Name</label>
            <input type="text" className='form-control' value={t_name} onChange={(e)=>setTname(e.target.value)}/>
            <button type='submit' onClick={submitHandler} className='btn btn-primary my-2'>Save Course</button>
        </form>
    </div>
  )
}
