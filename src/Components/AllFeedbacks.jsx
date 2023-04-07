import React, { useEffect, useState } from 'react'
import CourseServices from '../Services/CourseServices';

export default function AllFeedbacks() {
    const [feedbacks,setFeedbacks] = useState([]);
    useEffect(()=>
    {
        CourseServices.getFeedbacks().then((response)=>{
            setFeedbacks(response.data)
            console.log(response.data)
        })
    },[])

  return (
    <div>
        <h1 className='text-center text-primary'>All Feedbacks</h1>
        <div className="container">
            <div className="row">
                {feedbacks.map((element,index)=>{
                    return <div className="col-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                <h4>User:</h4>
                                    <p className='card-text'> {element.u_name}</p>
                                    <h4>Trainer:</h4>
                                    <p className='card-text'> {element.t_name}</p>
                                    <h4>Feedback:</h4>
                                    <p className='card-text'> {element.feedback}</p>
                                </div>
                            </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
