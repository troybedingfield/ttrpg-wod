import './Header.scss';
import { createClient } from '@/utils/supabase/server';
import RightHeaderMenu from './RightHeaderMenu/RightHeaderMenu';


export default async function Header({ ...props }) {
    const supabase = createClient()

    const {

    } = props

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {

    }

    return (
        <header className='min-h-16 flex w-full relative px-4 border border-b-slate-950 gap-2'>

            <a href="/" className="header-name text-center">WOD</a>
            <div className="flex w-auto items-center">
                {/* <a href="/characters">Characters</a> */}
            </div>
            <RightHeaderMenu data={data} />

        </header>
    )

}