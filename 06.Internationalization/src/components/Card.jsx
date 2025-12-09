import React from 'react'
import { Link } from 'react-router-dom'
import { useDarkmode } from '../stores/darkmodeStore'


const Card = ({ product }) => {

    const { isDarkmodeEnabled } = useDarkmode()
    const isProduct = true

    return (
        <Link to={`/details/${product._id}`}>
            <div className={`${isDarkmodeEnabled ? "text-white" : "text-black"} min-w-[300px] w-full p-2.5 border border-gray-300 rounded-md shadow-md relative`}>
                <img className='w-full h-[250px] object-contain' src={product.image ? product.image : product.images[0]}></img>
                <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
                <p className='text-sm my-4'>{product.description}</p>
                <p className='text-red-600 font-medium'>{product.currency}{product.price}</p>
            </div>
        </Link>
    )
}

export default Card