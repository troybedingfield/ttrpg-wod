'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"
import { useFormState } from "react-dom"
import { createChar } from "../actions"

export default function CreateCharacter({ ...props }) {
    const { user } = props

    const supabase = createClient()

    const [state, formAction] = useFormState(createChar, null)


    async function handleCreateCharacter() {
        const { data: newCharacter, error: newCharError } = await supabase
            .from('character')
            .insert([
                { uuid: user, charName: 'Character Name' },
            ])
            .select()


        if (newCharError) {
            console.log(newCharError);
        }

        if (!newCharError) {
            const { data: newAtt, error: newAttError } = await supabase
                .from('charAttributes')
                .insert([
                    { id: newCharacter[0].id, uuid: user, charStr: [false, false, false, false, false] },
                ])
                .select()

            if (newAttError) {
                console.log(newAttError);
            }

            const { data: newSkills, error: newSKillsError } = await supabase
                .from('charSkills')
                .insert([
                    { id: newCharacter[0].id, uuid: user, charAth: [false, false, false, false, false] },
                ])
                .select()

            if (newSKillsError) {
                console.log(newSKillsError);
            }


            const { data: newTTCB, error: newTTCBError } = await supabase
                .from('charTTCB')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newTTCBError) {
                console.log(newTTCBError);
            }

            const { data: newRHH, error: newRHHError } = await supabase
                .from('charRHH')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newRHHError) {
                console.log(newRHHError);
            }

            const { data: newHW, error: newHWError } = await supabase
                .from('charHealthAndWillpower')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newHWError) {
                console.log(newHWError);
            }

            const { data: newExp, error: newExpError } = await supabase
                .from('charExperience')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newExpError) {
                console.log(newExpError);
            }

            const { data: newBP, error: newBPError } = await supabase
                .from('charBloodPotency')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newBPError) {
                console.log(newBPError);
            }

            const { data: newBN, error: newBNError } = await supabase
                .from('charBioAndNotes')
                .insert([
                    { id: newCharacter[0].id, uuid: user },
                ])
                .select()

            if (newBNError) {
                console.log(newBNError);
            }






            if (!newAttError && !newSKillsError && !newAttError && !newTTCBError && !newRHHError && !newHWError && !newExpError && !newBPError && !newBNError) {
                window.location.reload();
            }
        }








        //     const { data: genre_data, error: genre_error } = await supabase
        //   .from('genre')
        //   .insert([
        //     { name: 'Technology' }
        //   ]);
        // const genre_id = genre_data[0].id;  
        // const { data: book_data, error: book_error } = await supabase
        //   .from('book')
        //   .insert([
        //     { name: 'The Joys of PostgreSQL' }
        //   ]);
        // const book_id = book_data[0]?.id;
        // const { data: book_genre_rel_data, error: book_genre_rel_error } = await supabase
        //   .from('book_genre_rel_data')
        //   .insert([
        //     { book_id, genre_id }
        //   ]);

    }

    return (
        <>
            {/* <Button buttonClick={handleCreateCharacter}>Add Character</Button> */}
            {/* <div className="container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg cursor-pointer" onClick={handleCreateCharacter}>Add Character</div> */}

            <form action={formAction}>
                <input type="hidden" name="user" value={user} />
                <Button type="submit" classNames="container flex items-center content-center justify-center min-h-40 max-w-36 flex-col gap-2 border border-slate-300 rounded-lg cursor-pointer" minWidth="136" minHeight="160">Add Character</Button>
            </form>
        </>
    )
}