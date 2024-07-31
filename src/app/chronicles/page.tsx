import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateChronicle from "./CreateChronicle/CreateChronicle";

export default async function Chronicles() {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className='container flex flex-wrap gap-8'>

            <div className='container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg'>

                <CreateChronicle user={data.user.id} />
            </div>
        </div>
    )
}