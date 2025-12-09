import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full h-screen font-semibold text-4xl flex justify-center items-center'>
      Page not found...
    </div>
  )
}

export default NotFound