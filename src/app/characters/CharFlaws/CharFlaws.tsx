'use client'

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import CharFlaw from "./CharFlaw/CharFlaw";

export default function CharFlaws({ ...props }) {
    const { user, data, params } = props;

    const supabase = createClient()

    const [flawData, setFlawData] = useState(data)

    async function addFlaw() {
        const { data: newFlaw, error: newAdvError } = await supabase
            .from('charFlaws')
            .insert([
                { uuid: user, id: params.characterID, flawName: null },
            ])
            .select()


        if (newAdvError) {
            console.log(newAdvError);
        }

        if (!newAdvError) {
            window.location.reload()
        }
    }

    return (
        <>
            <div className="sectionTitle flex gap-2 justify-center">Flaws

            </div>
            <div className="container flex flex-col gap-4">
                {flawData?.map(({ flaw_id, ...data }: { flaw_id: any }) => {
                    return (

                        <CharFlaw key={flaw_id} dataId={flaw_id} params={params} data={data} />

                    )
                })}
                <div className="container flex items-center justify-center border rounded-lg border-slate-500 min-h-12 px-2 cursor-pointer" onClick={() => addFlaw()}>Add Flaw</div>
            </div>
        </>
    )
}