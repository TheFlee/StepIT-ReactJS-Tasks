import React from 'react'
import { useTokens } from '../stores/tokenStore'

const Login = () => {
    const {setAccessToken, setRefreshToken} = useTokens()
    const [formData, setFormData] = React.useState({email: "", password: ""})

    const handleInputChange = (title, value) => {
        setFormData(prevState => ({
            ...prevState,
            [title]: value
        }))
    }

    const handleLogin = async () => {
        try {
            const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                const data = await res.json()
                setAccessToken(data.accessToken)
                setRefreshToken(data.refreshToken)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='w-fill h-screen flex justify-center items-center'>
            <div className='border border-zinc-300 p-5 max-w-[300px] w-full h-fit flex flex-col gap-5'>
                <input value={formData.email} className='border border-zinc-300 p-2' placeholder='Enter your email' onChange={(e) => {
                    handleInputChange("email", e.target.value)
                }} type='email'/>

                <input value={formData.password} className='border border-zinc-300 p-2' placeholder='Enter your password' onChange={(e) => {
                    handleInputChange("password", e.target.value)
                }} type='password'/>

                <button className='bg-slate-900 text-white py-2 cursor-pointer' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login