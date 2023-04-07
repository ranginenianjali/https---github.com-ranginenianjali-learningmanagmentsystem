import React, { useEffect, useState } from 'react'
import CourseServices from '../Services/CourseServices'
import { Link } from 'react-router-dom'

export default function Home() {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        CourseServices.getAllCourses().then((response)=>{
            setCourses(response.data)
            console.log(response.data)
        })
    },[])
    
  return (
    <div className='container my-2'>
        <h1 className='text-center text-bold text-primary'>LMS Home</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Course Name</th>
                    <th className='text-center'>Trainer Name</th>
                    
                </tr>
            </thead>
            <tbody>
                {courses.map((element,index)=>{
                    return <tr key={index}>
                        <td className='text-center'>{element.id}</td>
                        <td className='text-center'>{element.c_name}</td>
                        <td className='text-center'>{element.t_name}</td>
                       
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
