import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateChronicle from "./CreateChronicle/CreateChronicle";

export default async function Chronicles({ ...props }) {
    const { } = props;

    const supabase = createClient()

    // const { data: chronicles } = await supabase.from("chronicles").select().order('id', { ascending: true });


    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className='container flex flex-wrap gap-8'>
            {/* {characters?.map(({ char_id, id, charName: name, charChronicle: chronicle }, character) => {
                    return (

                        <Character key={char_id} id={id} name={name} chronicle={chronicle} />


                    )
                })} */}
            <div className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>
                {/* <CreateCharacter user={data.user.id} /> */}
                <CreateChronicle user={data.user.id} />
            </div>
        </div>
    )
}