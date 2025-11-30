import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ product }) => {
    const [count, setCount] = React.useState(0)

    return (
        <Link to={`/details/${product._id}`}>
            <div className='min-w-[300px] w-full p-2.5 border border-gray-300 rounded-md shadow-md relative'>
                <img className='w-full h-[250px] object-contain' src={product.image ? product.image : product.images[0]}></img>
                <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
                <p className='text-sm my-4'>{product.description}</p>
                <p className='text-red-600 font-medium'>{product.currency}{product.price}</p>
                <div className='absolute -bottom-2 right-3 w-fit flex justify-center items-center gap-5 py-5'>
                    <button onClick={() => {
                        setCount(prevState => prevState - 1)
                    }} className='flex items-center justify-center size-10 bg-red-600 text-3xl text-white'>-</button>
                    <p className='text-2xl'>{count}</p>
                    <button onClick={() => {
                        setCount(prevState => prevState + 1)
                    }} className='flex items-center justify-center size-10 bg-green-600 text-3xl text-white'>+</button>
                </div>
            </div>
        </Link>
    )
}

export default Card