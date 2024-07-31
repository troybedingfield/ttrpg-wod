import './Header.scss';
import { createClient } from '@/utils/supabase/server';
import RightHeaderMenu from './RightHeaderMenu/RightHeaderMenu';
import { useContext } from 'react';
import Link from 'next/link';



export default async function Header({ ...props }) {
    const supabase = createClient()

    const {

    } = props



    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {

    }

    const { data: settings, error: settingError } = await supabase
        .from("usersettings")
        .select()
        .eq('id', data?.user?.id)

    const { data: userProfile, error: userProfileError } = await supabase
        .from("userprofiles")
        .select()
        .eq('id', data?.user?.id)



    return (
        <header className='min-h-16 flex w-full relative px-4 border-b border-b-slate-950 dark:border-b-slate-500 gap-2'>

            <Link href="/" className="header-name text-center">WOD</Link>
            <div className="flex w-auto items-center">
                {/* <a href="/characters">Characters</a> */}
            </div>
            <RightHeaderMenu data={data} settings={settings}
                profile={userProfile} />

        </header>
    )

}