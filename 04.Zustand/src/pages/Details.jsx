import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {
  const [product, setProduct] = React.useState({})
  // const location = useLocation()
  const { id } = useParams()

  const getProductDetails = async () => {
    try {
      const res = await fetch(`https://ilkinibadov.com/api/v1/products/${id}/details`)
      if (res.ok) {
        const data = await res.json()
        setProduct(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    getProductDetails()
  }, [id])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full max-w-4xl p-5 border border-gray-300 rounded-md shadow-md'>
        <img className='w-full h-[400px] object-contain' src={product.image ? product.image : product.images ? product.images[0] : ''}></img>
        <h1 className='text-3xl font-semibold mt-3'>{product.title}</h1>
        <p className='text-lg my-4'>{product.description}</p>
        <p className='text-red-600 font-medium text-2xl'>{product.currency}{product.price}</p>
      </div>
    </div>

  )
}

export default Details