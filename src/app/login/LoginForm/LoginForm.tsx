'use client'
import './LoginForm.scss';
import Button from "@/app/components/Button/Button";
import { login, signup } from '../actions';
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { useState } from 'react';

export default function LoginForm({ ...props }) {
    const { } = props;

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='authFormContainer mx-auto '>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <Button formAction={login}>Log in</Button>
                {/* <Button formAction={signup}>Sign up</Button> */}
            </form>
            {/* <div className="loadingContainer">
                <LoadingSpinner />
            </div> */}
        </div>
    )
}