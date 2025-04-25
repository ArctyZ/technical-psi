'use client'
import { validateUser } from "@/app/lib/api/auth/auth"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"





export default function Prtotected() {
    const [user, setUser] = useState()
    const router = useRouter()

    useEffect(() => {
        validateUser().then(res => {
            if(!res?.user) router.push('/Q2')
            setUser(res?.user)})
            
    },[])

    return (
        <p>Hello, {user?.username}. Only User that have logged in can access this page</p>
    )
}