import React, { useState } from 'react'
import CourseServices from '../Services/CourseServices';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function TrainerFeedbackComponent() {
    const [username,setUserName] = useState('')
    const [trainername,setTrainerName] = useState('')
    const [rating,setRating] = useState(0);
    const [coursename,setcName] = useState("")
    const navigate = useNavigate();
    const userNameChangeHandler = (event) => 
    {
        setUserName(event.target.value)
    }
    const trainerNameChangeHandler = (event) => 
    {
        setTrainerName(event.target.value)
    }
   
    const submitHandler = async() => 
    {

        
        const jsonelement = {
            u_name:username,
            t_name:trainername,
            c_name:coursename,

            rating
        }
        const stringified = JSON.stringify(jsonelement)
       CourseServices.saveReviews(jsonelement).then((response)=>console.log(response.data)).catch((e)=>console.log(e.message))
       navigate('/dashboard')
    }
    const setcourseName = (event) => 
    {
        setcName(event.target.value)
    }

  return (
    <div className='container'>
        <h1 className='text-center text-success'>Trainer Review</h1>
        
            <label htmlFor="user_name" className='form-label'>User Name</label>
            <input type="text" className='form-control' id='user_name' value={username} onChange={userNameChangeHandler}/>
            <label htmlFor="c_name" className='form-label'>Course Name</label>
            <input type="text" className='form-control' id='c_name' value={coursename} onChange={setcourseName}/>
            <label htmlFor="trainer_name" className='form-label'>Trainer Name</label>
            <input type="text" className='form-control' value={trainername} onChange={trainerNameChangeHandler}/>

            <label htmlFor="review" className='form-label'>Review</label>
            <input type='range'  min={0} max={5} step={1} id='review' value={rating} onChange={(e)=>setRating(e.target.value)} className='form-control'/>
            <p className='text'>{rating}</p>
            <button className='btn btn-primary my-2' type='submit' onClick={submitHandler} disabled = {rating==0?true:false}>Submit Review</button>
        
    </div>
  )
}
