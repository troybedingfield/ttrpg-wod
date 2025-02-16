import { createClient } from '@/utils/supabase/server'
import Button from '../components/Button/Button'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import { resetPassword } from './actions'
import './page.scss'
import { redirect } from 'next/navigation'

export default async function ResetPage() {

    // const supabase = createClient()

    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {
    //     // console.log(error);
    // }
    // if (!error) {
    //     redirect('/dashboard')
    // }


    return (
        <></>
        // <div className='auth-container content-center items-center'>
        //     <div className='authFormContainer mx-auto '>
        //         <form>
        //             <label htmlFor="password">Password:</label>
        //             <input id="password" name="password" type="password" required />
        //             <label htmlFor="password">Confirm Password:</label>
        //             <input id="confirmPassword" name="confirmPassword" type="password" required />
        //             <Button formAction={resetPassword}>Reset Password</Button>
        //             {/* <Button formAction={signup}>Sign up</Button> */}
        //         </form>
        //     </div>
        //     {/* <LoadingSpinner /> */}
        // </div>
    )
}