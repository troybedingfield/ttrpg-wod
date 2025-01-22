"use client"
import { createClient } from '@/utils/supabase/client'
import Button from '../components/Button/Button'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { login, signup } from './actions'
import './page.scss'
import { redirect } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'

export default function LoginPage() {

    const supabase = createClient()

    const [mysession, setMySession] = useState({})



    useEffect(() => {
        supabase.auth.getUser().then((session) => {
            // do something here with the session like  ex: setState(session)
            setMySession(session)
        });

    }, [])

    console.log(mysession)


    return (
        <Suspense fallback={<Loading />}>
            <div className='auth-container content-center items-center'>
                <div className='authFormContainer mx-auto '>
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" required />
                        <label htmlFor="password">Password:</label>
                        <input id="password" name="password" type="password" required />
                        <Button formAction={login}>Log in</Button>
                        {/* <Button formAction={signup}>Sign up</Button> */}
                    </form>
                </div>
                {/* <LoadingSpinner /> */}
            </div>
        </Suspense>
    )
}