'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'



async function checkUser() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        console.log(error);
        // redirect('/');
    }

    return data;
}


export async function getProfileData() {

    // let userProfileData;
    const supabase = createClient()
    let data = await checkUser();
    const { data: userProfile, error: userProfileError } = await supabase
        .from("userprofiles")
        .select()
        .eq('id', data?.user?.id)



    return await userProfile;
}

export async function getUserSettings() {
    let data = await checkUser();
    const supabase = createClient()
    const { data: settings, error: settingError } = await supabase
        .from("usersettings")
        .select()
        .eq('id', data?.user?.id)

    return settings;
}