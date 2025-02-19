'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"
import { createDiscipline } from "../actions"
import { useState } from "react"
import { useToast } from "@/app/components/Toast/useToast"

export default function AddDiscipline({ ...props }) {
    const { user, params } = props

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    async function handleCreateDiscipline() {


        setIsPending(true);
        const result = await createDiscipline(user, params);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

    }

    return (
        <>
            {/* <Button buttonClick={handleCreateDiscipline}>Add Discipline</Button> */}
            <div className="container flex w-full border rounded-lg border-slate-500 items-center justify-center min-h-20 cursor-pointer" onClick={handleCreateDiscipline}>Add Discipline</div>
        </>
    )
}