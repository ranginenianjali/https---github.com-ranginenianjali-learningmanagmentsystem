import React, { useEffect, useState } from 'react'
import CourseServices from '../Services/CourseServices'

export default function Dashboard() {
    const [srated,setSrated] = useState([])
    const [trated,setTrated] = useState([])
    useEffect(()=>{
        CourseServices.getBottomRatedReviews().then((response)=>{
            setSrated(response.data)
            console.log(response.data)
        })
        CourseServices.getTopRatedReviews().then((response)=>{
            setTrated(response.data)
            console.log(response.data)
        })
    },[])
  return (
    <div>
        <h1 className='text-center text-primary'>Dashboard</h1>
        <div className="container card p-2">
            <div className="row">
                <div className="col-6">
                    <p className='text-center text-primary'>Least Rated Courses</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Course_Name</th>
                                <th>Trainer_Name</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {srated.map((elements,index)=>{return <tr key={index}>
                                <td>{elements.c_name}</td>
                                <td>{elements.t_name}</td>
                                <td>{elements.rating}</td>
                            </tr>})}
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <p className='text-center text-primary'>Top Rated Courses</p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Trainer_Name</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trated.map((elements,index)=>{
                                return <tr key={index}>
                                        <td>{elements.c_name}</td>
                                        <td>{elements.t_name}</td>
                                        <td>{elements.rating}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
