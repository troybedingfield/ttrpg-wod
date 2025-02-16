'use client'
import './LoginForm.scss';
import Button from "@/app/components/Button/Button";
import { resetPassword } from '../actions';
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { useState } from 'react';

export default function LoginForm({ ...props }) {
    const { } = props;

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='authFormContainer mx-auto '>
            <form>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <label htmlFor="password">Confirm Password:</label>
                <input id="confirmPassword" name="confirmPassword" type="confirmPassword" required />
                <Button formAction={resetPassword}>Reset Password</Button>
                {/* <Button formAction={signup}>Sign up</Button> */}
            </form>
            {/* <div className="loadingContainer">
                <LoadingSpinner />
            </div> */}
        </div>
    )
}