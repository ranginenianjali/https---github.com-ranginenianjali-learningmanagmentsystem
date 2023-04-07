import React, { useEffect, useState } from 'react'


export default function LMSMainCompo() {
 
    const styles  = {
        backgroundImage:'url("https://tlslearning.com/wp-content/uploads/2012/12/HiRes.jpg")',
        backgroundSize:"cover",
        height:"60vh",
        width:"50vw"
      
    }
    
  return (
    <div>
        <div className='d-flex flex-row justify-content-center'>
        <div style={styles}></div>
    </div>
    <h3 className='text-center'>Welcome to Courses LMS</h3>
    <p className='text-center' >Offers a wide variety of services based on your need</p>
    </div>
    
  )
}
