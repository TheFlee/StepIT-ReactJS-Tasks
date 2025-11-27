import React from 'react'
import Card from './components/Card'

const App = () => {
  const [loading, setLoading] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [products, setProducts] = React.useState([])

  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch(searchTerm.length >= 3 ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchTerm}` : 'https://ilkinibadov.com/api/v1/products')
      if (res.ok) {
        const data = await res.json()
        setProducts(searchTerm.length >= 3 ? data.content : data.products)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getProducts()
  }, [searchTerm])

  return (
    <div>

      <div className='w-full flex justify-center py-5'>
        <input className='border border-zinc-300 p-3 min-w-[300px]' placeholder='Search...' type="search" value={searchTerm} onChange={(e) => {
          setSearchTerm(e.target.value)
        }}></input>
      </div>
      {
        loading ? (
          <h1 className='text-center text-3xl font-medium'>Loading...</h1>
        ) : (<div className='w-full h-screen grid grid-cols-4 gap-5'>
          {products.map(product => <Card product={product} />)}
        </div>)
      }
    </div>
  )
}

export default App