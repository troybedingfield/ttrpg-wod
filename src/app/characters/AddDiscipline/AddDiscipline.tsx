'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"

export default function AddDiscipline({ ...props }) {
    const { user, params } = props

    const supabase = createClient()



    async function handleCreateDiscipline() {
        const { data: newDiscipline, error: newDiscError } = await supabase
            .from('charDisciplines')
            .insert([
                { uuid: user, id: params, disciplineName: 'Discipline Name' },
            ])
            .select()


        if (newDiscError) {
            console.log(newDiscError);
        }

        if (!newDiscError) {
            window.location.reload();
        }










    }

    return (
        <>
            {/* <Button buttonClick={handleCreateDiscipline}>Add Discipline</Button> */}
            <div className="container flex w-full border rounded-lg border-slate-500 items-center justify-center min-h-20 cursor-pointer" onClick={handleCreateDiscipline}>Add Discipline</div>
        </>
    )
}