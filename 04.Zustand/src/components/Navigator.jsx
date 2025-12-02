import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import Details from '../pages/Details'
import UserAccount from '../pages/UserAccount'
import UserDetails from '../pages/UserDetails'
import UserLayout from './UserLayout'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import { useTokens } from '../stores/tokenStore'

const Navigator = () => {
    const {accessToken} = useTokens()
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/login' element={<Login />} />
            {accessToken && <Route path='/profile' element={<Profile />} />}
            <Route path='/details/:id' element={<Details />} />
            <Route path='*' element={<NotFound />} />
            <Route path='user' element={<UserLayout />}>
                <Route path='details' element={<UserDetails />} />
                <Route path='account' element={<UserAccount />} />
            </Route>
        </Routes>
    )
}

export default Navigator