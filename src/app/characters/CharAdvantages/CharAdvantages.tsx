'use client'
import { useState } from "react";
import CharAdvantage from "./CharAdvantage/CharAdvantage";
import { addAdvantage } from "../actions";
import { useToast } from "@/app/components/Toast/useToast";

export default function CharAdvantages({ ...props }) {
    const { user, data, params } = props;

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    const [advData, setAdvData] = useState(data)

    async function handleAddAdvantage() {


        setIsPending(true);
        const result = await addAdvantage(user, params);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

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