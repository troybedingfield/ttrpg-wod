'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"
import { createDiscipline } from "../actions"

export default function AddDiscipline({ ...props }) {
    const { user, params } = props


    async function handleCreateDiscipline() {
        createDiscipline(user, params);

    }

    return (
        <>
            {/* <Button buttonClick={handleCreateDiscipline}>Add Discipline</Button> */}
            <div className="container flex w-full border rounded-lg border-slate-500 items-center justify-center min-h-20 cursor-pointer" onClick={handleCreateDiscipline}>Add Discipline</div>
        </>
    )
}