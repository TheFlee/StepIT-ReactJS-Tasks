import React from 'react'
import Card from '../components/Card'
import { useDarkmode } from '../stores/darkmodeStore'
import api from '../utils/axios'
import LanguageSelector from '../components/LanguageSelector'
import { useTranslation } from 'react-i18next'

const Products = () => {
    const {t} = useTranslation()
    const [searchTerm, setSearchTerm] = React.useState("")
    const [products, setProducts] = React.useState([])
    const { isDarkmodeEnabled, toggleDarkmode } = useDarkmode()

    const getProducts = async () => {
        try {
            const {data, statusText} = await api.get(searchTerm.length >= 3 ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchTerm}` : 'https://ilkinibadov.com/api/v1/products')
            if (statusText === "OK") {
                setProducts(searchTerm.length >= 3 ? data.content : data.products)
            }
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        getProducts()
    }, [searchTerm])

    return (
        <div className={`${isDarkmodeEnabled ? 'bg-slate-900 text-white' : 'bg-white text-black'} transition-all duration-300`}>
            <div className='w-full flex justify-center py-5 gap-5'>
                <input className='border border-zinc-300 p-3 min-w-[300px]' placeholder='Search...' type="search" value={searchTerm} onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
                <button onClick={toggleDarkmode} className='bg-red-600 text-white px-2'>{isDarkmodeEnabled ? "Disable Darkmode" : "Enable Darkmode"}</button>
                <LanguageSelector />
            </div>
            <h1 className='text-3xl flex justify-center'>{t("explore_products")}</h1>
            <div className="w-full min-h-screen h-fit grid grid-cols-4 gap-5 p-5">
                {products.map(product => <Card key={product._id} product={product} />)}
            </div>
        </div>
    )
}

export default Products