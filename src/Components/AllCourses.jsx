import React, { useEffect, useState } from 'react'
import CourseServices from '../Services/CourseServices'
import Error from './Error';
export default function AllCourses() {
    const [courses,setCourses] = useState([]);
    const [error,setError] = useState(false)
    useEffect(()=>{
        CourseServices.getAllCourses().then((response)=>{
            setCourses(response.data)
            setError(false)
        }).catch((e)=>setError(true))
    },[])
  return (
    <div>
        {error?<Error/>: <div>
        <h1 className='text-center text-success'>All Courses</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th className='text-center'>Courses Available</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((element,index)=>{
                    return <tr key={index}>
                        <td className='text-center'>{element.c_name}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>}
        
    </div>

   
  )
}
