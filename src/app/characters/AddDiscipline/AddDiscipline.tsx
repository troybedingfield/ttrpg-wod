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
            <Button buttonClick={handleCreateDiscipline}>Add Discipline</Button>
        </>
    )
}