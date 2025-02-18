import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateChronicle from "./CreateChronicle/CreateChronicle";
import Chronicle from "./Chronicle/Chronicle";
import { MAX_FREE_CHRONICLES } from "../lib/constants";
import { QueryData } from "@supabase/supabase-js";

export default async function Chronicles() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const { data: chronicles } = await supabase
        .from("chronicle")
        .select()
        .eq('storyteller', data.user.id)
        .order('chron_id', { ascending: true });



    // const chroncielsWithCharactersQuery = supabase.from('chronicle').select(`
    //         chron_id,
    //         chronName,
    //         character (
    //           id,
    //           charName,
    //           chronicle
    //         )
    //       `)
    // type ChroncielsWithCharacters = QueryData<typeof chroncielsWithCharactersQuery>

    // const { data: chronChars, error: chronCharsErrors } = await chroncielsWithCharactersQuery
    // if (chronCharsErrors) throw chronCharsErrors
    // const chroncielsWithCharacters: ChroncielsWithCharacters = chronChars


    // console.log(chroncielsWithCharacters)


    const { data: chronChars, error: chronCharsError } = await supabase
        .from('chronicle').select(`
        chron_id, 
        chronName, 
        chroniclePlayers ( 
        chron_id, 
        character_id,
        character (
        id,
        charName
        ) 
        )
      `)

    // console.log(chronChars);


    return (
        // <div className='container flex flex-wrap gap-8'>

        //     <div className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>

        //         <CreateChronicle user={data.user.id} />
        //     </div>
        // </div>

        <div className='container flex flex-wrap gap-8'>
            <pre>{JSON.stringify(chronChars, null, 2)}</pre>

            {chronicles?.map(({ chron_id, chronName: name }) => {
                return (

                    <Chronicle key={chron_id} id={chron_id} name={name} />


                )
            })}
            {chronicles?.length! < MAX_FREE_CHRONICLES &&
                <CreateChronicle user={data.user.id} />
            }
        </div>
    )
}