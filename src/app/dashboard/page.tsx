import './page.scss';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Dashboard() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <>


            <div className='container flex flex-col gap-4'>
                <section>
                    <Link href="/chronicles" className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>Chronicles</Link>
                </section>

                <section>
                    <Link href="/characters" className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>Characters</Link>
                </section>
            </div>

        </>
    )
}