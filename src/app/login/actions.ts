'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { NextRequest } from 'next/server'


export async function checkAuth() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        // console.log(error);
    }
    if (!error) {
        redirect('/dashboard')
    }
}

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/dashboard', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        // redirect('/error')
        console.log(error)
    }

    revalidatePath('/dashboard', 'layout')
    redirect('/dashboard')
}


export async function sendResetPassword(formData: FormData, request: NextRequest) {
    const supabase = await createClient()

    // // type-casting here for convenience
    // // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
    }

    // const { error } = await supabase.auth.signInWithPassword(data)

    // if (error) {
    //     redirect('/error')
    // }

    // revalidatePath('/dashboard', 'layout')
    // redirect('/dashboard')
    console.log(data.email)

    try {
        const { data: resetData, error } = await supabase.auth.resetPasswordForEmail(data.email, {
            redirectTo: `wod.robotknifefight.com/reset`
        })
    } catch (error) {
        console.log(error)
    }
}