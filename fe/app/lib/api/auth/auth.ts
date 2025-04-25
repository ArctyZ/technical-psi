'use server'
import axios from "axios"
import { cookies } from "next/headers"






export const validateUser = async () => {
    const cookie = await cookies()
    const token = cookie.get('auth_token')?.value
    try {
        const res = await axios.get('http://localhost:3001/auth/validate', {headers: {Authorization: `Bearer ${token}`}})

        return res.data
    } catch (error) {
        console.log(error)
    }
}