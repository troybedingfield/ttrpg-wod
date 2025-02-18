'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function resetPassword(formData: FormData) {
    const supabase = await createClient()

    const { data: user, error } = await supabase.auth.getUser()
    if (error || !user?.user) {
        // console.log(error);
    }
    if (!error) {

    }


    // const supabase = createClient()

    // // type-casting here for convenience
    // // in practice, you should validate your inputs
    // const data = {
    //     email: formData.get('email') as string,
    //     password: formData.get('password') as string,
    // }

    const data = {
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    }

    // const { error } = await supabase.auth.signInWithPassword(data)

    // if (error) {
    //     redirect('/error')
    // }

    // revalidatePath('/dashboard', 'layout')
    // redirect('/dashboard')
    if (data.password !== data.confirmPassword) {
        console.log(`password doesn't match`)
    } else {
        const { data: userUpdate, error } = await supabase.auth.updateUser({ password: data.password })
        try {

        }
        catch { error } {
            console.log(error)
        }

    }
}
