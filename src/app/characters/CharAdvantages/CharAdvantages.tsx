'use client'
import { useState } from "react";
import CharAdvantage from "./CharAdvantage/CharAdvantage";
import { createClient } from "@/utils/supabase/client";

export default function CharAdvantages({ ...props }) {
    const { user, data, params } = props;


    const supabase = createClient()

    const [advData, setAdvData] = useState(data)

    async function addAdvantage() {
        const { data: newAdv, error: newAdvError } = await supabase
            .from('charAdvantages')
            .insert([
                { uuid: user, id: params.characterID, advantageName: null },
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
            <div className="sectionTitle flex gap-2 justify-center">Advantages

            </div>
            <div className="container flex flex-col gap-4">
                {advData?.map(({ adv_id, ...data }: { adv_id: any }) => {
                    return (

                        <CharAdvantage key={adv_id} dataId={adv_id} params={params} data={data} />

                    )
                })}
                <div className="container flex items-center justify-center border rounded-lg border-slate-500 min-h-12 px-2 cursor-pointer" onClick={() => addAdvantage()}>Add Advantage</div>
            </div>


        </>
    )
}