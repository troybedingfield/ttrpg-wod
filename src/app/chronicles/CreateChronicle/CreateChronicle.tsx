'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"

export default function CreateChronicle({ ...props }) {
    const { user } = props

    const supabase = createClient()




    async function handleCreateCharacter() {

        console.log(user);

    }

    return (
        <>

            <div className="container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg cursor-pointer" onClick={handleCreateCharacter}>Create Chronicle</div>
        </>
    )
}