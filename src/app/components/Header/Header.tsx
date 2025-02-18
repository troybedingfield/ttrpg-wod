import './Header.scss';
import { createClient } from '@/utils/supabase/server';
import RightHeaderMenu from './RightHeaderMenu/RightHeaderMenu';
import { useContext } from 'react';
import Link from 'next/link';
import { getProfileData, getUserSettings } from './actions';



export default async function Header({ ...props }) {
    const {

    } = props


    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {

    }

    let userProfile = await getProfileData();
    let settings = await getUserSettings();



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