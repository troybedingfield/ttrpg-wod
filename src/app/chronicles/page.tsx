import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateChronicle from "./CreateChronicle/CreateChronicle";
import Chronicle from "./Chronicle/Chronicle";

export default async function Chronicles() {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const { data: chronicles } = await supabase
        .from("chronicle")
        .select()
        .eq('storyteller', data.user.id)
        .order('chron_id', { ascending: true });

    console.log(chronicles);

    return (
        // <div className='container flex flex-wrap gap-8'>

        //     <div className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>

        //         <CreateChronicle user={data.user.id} />
        //     </div>
        // </div>
        <div className='container flex flex-wrap gap-8'>
            {chronicles?.map(({ chron_id, id, chronName: name }) => {
                return (

                    <Chronicle key={chron_id} id={id} name={name} />


                )
            })}
            {chronicles?.length! < 5 &&
                <CreateChronicle user={data.user.id} />
            }
        </div>
    )
}