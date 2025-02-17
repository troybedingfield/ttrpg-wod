'use client'
import { createClient } from '@/utils/supabase/client'
import Button from '../components/Button/Button'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { checkAuth, login, sendResetPassword, signup } from './actions'
import './page.scss'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {

    const [resetPassword, setResetPassword] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        checkAuth();

    }, [])





    return (
        <>

            {!resetPassword && <div className='auth-container content-center items-center'>
                <div className='flex relative flex-col w-full justify-items-center'>
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
                    <p className='hover:underline w-auto mx-auto' onClick={() => setResetPassword(!resetPassword)}>{resetPassword ? "login" : "Reset Password"}</p>
                </div>
                {/* <LoadingSpinner /> */}
            </div>}
            {resetPassword &&
                <>
                    <div className='auth-container content-center items-center'>
                        <div className='flex relative flex-col w-full justify-items-center'>
                            <div className='authFormContainer mx-auto '>
                                <form>
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" name="email" type="email" required />
                                    <Button formAction={sendResetPassword}>Reset My Password</Button>
                                    {/* <Button formAction={signup}>Sign up</Button> */}
                                    {success && <p className='bg-green-100 text-green-600 px-2 rounded'>Success! Check your email to reset your password.</p>}
                                </form>
                            </div>
                            <p className='hover:underline w-auto mx-auto' onClick={() => setResetPassword(!resetPassword)}>{resetPassword ? "login" : "Reset Password"}</p>
                        </div>
                        {/* <LoadingSpinner /> */}
                    </div>

                </>
            }

        </>
    )
}