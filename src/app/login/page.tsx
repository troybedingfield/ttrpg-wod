import Button from '../components/Button/Button'
import { login, signup } from './actions'
import './page.scss'

export default function LoginPage() {
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
        </div>
    )
}