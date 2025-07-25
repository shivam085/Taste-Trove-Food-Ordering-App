import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  const [newloading, setNewLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setNewLoading(false)
    }, 6000);
    
  }, [])



  return (

    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? <PropagateLoader color="#36d7b7" />
          :
          newloading ?
          (<div>
            <h2 className='text-3xl font-semibold mb-4 '>Order Successful!</h2>
            <p>Your odrer has been successfully placed! </p>
          </div>) 
          : <Navigate to="/" />
      }

    </div>
  )
}

export default Success
