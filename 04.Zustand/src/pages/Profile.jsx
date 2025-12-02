import React from 'react'
import { useTokens } from '../stores/tokenStore'
import { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({})
    const { accessToken } = useTokens()

    const getUserInfo = async () => {
        try {
            const res = await fetch("https://ilkinibadov.com/api/v1/auth/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            if (res.ok) {
                const data = await res.json()
                setUser(data)
                console.log(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='flex flex-col justify-center items-center h-screen relative'>
            <h1 className='absolute top-1'>Profile Page</h1>
            <p>{user.firstname} {user.lastname}</p>
        </div>
    )
}

export default Profile