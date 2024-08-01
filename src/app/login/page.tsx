import { createClient } from '@/utils/supabase/server'
import Button from '../components/Button/Button'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { login, signup } from './actions'
import './page.scss'
import { redirect } from 'next/navigation'

export default async function LoginPage() {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {

    }
    if (!error) {
        redirect('/dashboard')
    }


    return (
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
    )
}