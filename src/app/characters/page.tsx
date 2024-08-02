import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Button from '../components/Button/Button';
import CreateCharacter from './CreateCharacter/CreateCharacter';
import Character from './Character/Character';

export default async function Characters() {
    const supabase = createClient()





    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const { data: characters } = await supabase
        .from("character")
        .select()
        .eq('uuid', data.user.id)
        .order('id', { ascending: true });






    return (
        <>
            {/* <pre>{JSON.stringify(characters, null, 2)}</pre> */}

            <div className='container flex flex-wrap gap-8'>
                {characters?.map(({ char_id, id, charName: name, charChronicle: chronicle }, character) => {
                    return (

                        <Character key={char_id} id={id} name={name} chronicle={chronicle} />


                    )
                })}
                {characters?.length! < 5 &&
                    <CreateCharacter user={data.user.id} />
                }
            </div>
        </>
    )
}