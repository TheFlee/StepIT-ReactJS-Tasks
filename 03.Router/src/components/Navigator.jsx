import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import Details from '../pages/Details'
import UserAccount from '../pages/UserAccount'
import UserDetails from '../pages/UserDetails'
import UserLayout from './UserLayout'

const Navigator = () => {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='*' element={<NotFound />} />
            <Route path='user' element={<UserLayout />}>
                <Route path='details' element={<UserDetails />}/>
                <Route path='account' element={<UserAccount />}/>
            </Route>
        </Routes>
    )
}

export default Navigator