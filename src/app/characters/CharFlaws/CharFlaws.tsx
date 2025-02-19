'use client'

import { useState } from "react";
import CharFlaw from "./CharFlaw/CharFlaw";
import { addFlaw } from "../actions";
import { useToast } from "@/app/components/Toast/useToast";

export default function CharFlaws({ ...props }) {
    const { user, data, params } = props;

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    const [flawData, setFlawData] = useState(data)

    async function handleAddFlaw() {


        setIsPending(true);
        const result = await addFlaw(user, params);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

    }

    return (
        <>
            <div className="sectionTitle flex gap-2 justify-center">Flaws

            </div>
            <div className="container flex flex-col gap-4">
                {data?.map(({ flaw_id, ...data }: { flaw_id: any }) => {
                    return (

                        <CharFlaw key={flaw_id} dataId={flaw_id} params={params} data={data} />

                    )
                })}
                <div className="container flex items-center justify-center border rounded-lg border-slate-500 min-h-12 px-2 cursor-pointer" onClick={() => handleAddFlaw()}>Add Flaw</div>
            </div>
        </>
    )
}