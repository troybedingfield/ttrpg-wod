'use client'
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";
import './CharExperience.scss'
import { useToast } from "@/app/components/Toast/useToast";
import { updateExperience, updateSpent } from "../actions";

export default function CharExperience({ ...props }) {
    const { id, data, params } = props;

    const [charTotalExp, setCharTotalExp] = useState(data.totalExp);
    const [charSpentExp, setCharSpentExp] = useState(data.spentExp);


    const [isEditingTotal, setIsEditingTotal] = useState(false)
    const [isEditingSpent, setIsEditingSpent] = useState(false)

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    const totalForm = useRef<any | undefined>(null);
    const spentForm = useRef<any | undefined>(null);

    const supabase = createClient();


    function editTotal() {
        setIsEditingTotal(isEditingTotal => !isEditingTotal)
    }
    function editSpent() {
        setIsEditingSpent(isEditingSpent => !isEditingSpent)
    }

    async function handleTotalFormSbumit(event: any, form: any) {
        event.preventDefault()

        let totalExp = form.current[0].value;
        let id = form.current[1].value;

        let formData = { totalExp, id }

        setCharTotalExp(totalExp);

        setIsEditingTotal(isEditingTotal => !isEditingTotal)

        setIsPending(true);
        const result = await updateExperience(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

        // const { data, error } = await supabase
        //     .from('charExperience')
        //     .update({
        //         totalExp: totalExp,

        //     })
        //     .eq('id', params)
        //     .select()

        // if (error) {
        //     console.log(error);
        // }

        // if (!error) {

        //     setCharTotalExp(totalExp);

        //     setIsEditingTotal(isEditingTotal => !isEditingTotal)
        // }
    }

    async function handleSpentFormSbumit(event: any, form: any) {
        event.preventDefault()
        let spentExp = form.current[0].value;
        let id = form.current[1].value;

        let formData = { spentExp, id }

        setCharSpentExp(spentExp);

        setIsEditingSpent(isEditingSpent => !isEditingSpent)

        setIsPending(true);
        const result = await updateSpent(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

        // const { data, error } = await supabase
        //     .from('charExperience')
        //     .update({
        //         spentExp: spentExp,

        //     })
        //     .eq('id', params)
        //     .select()

        // if (error) {
        //     console.log(error);
        // }

        // if (!error) {

        //     setCharSpentExp(spentExp);

        //     setIsEditingSpent(isEditingSpent => !isEditingSpent)
        // }
    }

    return (
        <>
            <div className="container flex sm:flex-row flex-col gap-8">
                {!isEditingTotal &&
                    <div className="totalExp flex items-center sm:justify-end w-full gap-2 justify-center">
                        <a onClick={() => editTotal()}><i
                            className="icon icon-edit-b"></i></a> <div className="flex border border-slate-500 rounded-lg gap-2 p-2">Total Experience: <span className="expNumber">{charTotalExp}</span></div>
                    </div>
                }
                {isEditingTotal &&
                    <div className="totalExp flex items-center sm:justify-end w-full gap-2 justify-center">
                        <a onClick={() => editTotal()}><i
                            className="icon icon-edit-b"></i></a>
                        <form ref={totalForm} action="" onSubmit={(e) => handleTotalFormSbumit(e, totalForm)}>
                            <div className="flex border border-slate-500 rounded-lg gap-2 p-2 items-center">
                                <div className="text-nowrap">Total Experience: </div>
                                <input className="flex w-auto max-w-20" type="number" defaultValue={charTotalExp} />
                                <input type='hidden' name="id" value={params} />
                                <Button type="submit">Save</Button></div>
                        </form>
                    </div>
                }
                {!isEditingSpent && <div className="spentExp flex items-center sm:justify-start w-full gap-2 justify-center">
                    <a onClick={() => editSpent()}><i
                        className="icon icon-edit-b"></i></a><div className="flex border border-slate-500 gap-2 rounded-lg p-2">Spent Experience:<span className="expNumber">{charSpentExp}</span></div>
                </div>}
                {isEditingSpent && <div className="spentExp flex items-center sm:justify-start w-full gap-2">
                    <a onClick={() => editSpent()}><i
                        className="icon icon-edit-b"></i></a>
                    <form ref={spentForm} action="" onSubmit={(e) => handleSpentFormSbumit(e, spentForm)}>
                        <div className="flex border border-slate-500 rounded-lg gap-2 p-2 items-center">
                            <div className="text-nowrap">Spent Experience:</div>
                            <input className="flex w-auto max-w-20" type="number" defaultValue={charSpentExp} />
                            <input type='hidden' name="id" value={params} />
                            <Button type="submit">Save</Button></div>

                    </form>
                </div>
                }

            </div >
        </>
    )
}