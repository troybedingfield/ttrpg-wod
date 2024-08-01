'use client'
import { useState } from "react";
import CharAdvantage from "./CharAdvantage/CharAdvantage";
import { addAdvantage } from "../actions";

export default function CharAdvantages({ ...props }) {
    const { user, data, params } = props;



    const [advData, setAdvData] = useState(data)

    async function handleAddAdvantage() {
        addAdvantage(user, params.characterID);

    }



    return (
        <>
            <div className="sectionTitle flex gap-2 justify-center">Advantages

            </div>
            <div className="container flex flex-col gap-4">
                {data?.map(({ adv_id, ...data }: { adv_id: any }) => {
                    return (

                        <CharAdvantage key={adv_id} dataId={adv_id} params={params} data={data} />

                    )
                })}
                <div className="container flex items-center justify-center border rounded-lg border-slate-500 min-h-12 px-2 cursor-pointer" onClick={() => handleAddAdvantage()}>Add Advantage</div>
            </div>


        </>
    )
}