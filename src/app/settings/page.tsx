import './page.scss';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch';
import Button from '../components/Button/Button';
import { useState } from 'react';
import Profile from './Profile/Profile';
import UserSettings from './Settings/Settings';

export default async function Settings() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const { data: profile, error: profileError } = await supabase.from("userprofiles")
        .select()
        .eq('id', data?.user.id)

    // const { data: settings, error: settingsError } = await supabase.from("usersettings")
    //     .select()
    //     .eq('id', data?.user.id)


    return (
        <>
            <section className='container flex flex-col gap-2'>


                {/* <pre>{JSON.stringify(profile, null, 2)}</pre>
                <pre>{JSON.stringify(settings, null, 2)}</pre> */}
                <Profile user={data.user.id} profile={profile} />
                {/* <div className="sectionTitle">
                    App Settings
                </div> */}
                {/* <UserSettings user={data.user.id} data={settings} /> */}


            </section>
        </>
    )
}