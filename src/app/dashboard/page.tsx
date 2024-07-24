import './page.scss';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <>
            DASHBOARD

            <a href="/characters" className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>Characters</a>

        </>
    )
}