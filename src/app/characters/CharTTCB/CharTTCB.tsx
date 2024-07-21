'use client'
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";

export default function CharTTCB({ ...props }) {
    const { id, params, ttcb_id, tenets, touchstones, bane } = props;

    const [isTenetEditing, setIsTenetEditing] = useState(false);
    const [isTouchEditing, setIsTouchEditing] = useState(false);
    const [isBaneEditing, setIsBaneEditing] = useState(false);

    const [charTenet, setCharTenet] = useState(tenets)
    const [charTouch, setCharTouch] = useState(touchstones)
    const [charBane, setCharBane] = useState(bane)



    const formTenet = useRef<any | undefined>();
    const formTouch = useRef<any | undefined>();
    const formBane = useRef<any | undefined>();

    const supabase = createClient();

    function editTenet() {
        setIsTenetEditing(isTenetEditing => !isTenetEditing)
    }

    function cancelEditTenet() {
        setIsTenetEditing(isTenetEditing => !isTenetEditing)
    }

    function editTouch() {
        setIsTouchEditing(isTouchEditing => !isTouchEditing)
    }

    function cancelEditTouch() {
        setIsTouchEditing(isTouchEditing => !isTouchEditing)
    }

    function editBane() {
        setIsBaneEditing(isBaneEditing => !isBaneEditing)
    }

    function cancelEditBane() {
        setIsBaneEditing(isBaneEditing => !isBaneEditing)
    }

    async function handleTenetsUpdate(event: any, form: any) {
        event.preventDefault();

        console.log(form.current[0].value)

        let chronTenets = form.current[0].value;



        const { data, error } = await supabase
            .from('charTTCB')
            .update({
                chronTenets: chronTenets,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharTenet(chronTenets);

            setIsTenetEditing(isTenetEditing => !isTenetEditing)
        }

    }
    async function handleTouchstonesUpdate(event: any, form: any) {
        event.preventDefault();

        console.log(form.current[0].value)

        let touchConvictions = form.current[0].value;



        const { data, error } = await supabase
            .from('charTTCB')
            .update({
                touchstoneAndConvictions: touchConvictions,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharTouch(touchConvictions);

            setIsTouchEditing(isTenetEditing => !isTenetEditing)
        }

    }
    async function handleBaneUpdate(event: any, form: any) {
        event.preventDefault();

        console.log(form.current[0].value)

        let clanBane = form.current[0].value;



        const { data, error } = await supabase
            .from('charTTCB')
            .update({
                clanBane: clanBane,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharBane(clanBane);

            setIsBaneEditing(isTenetEditing => !isTenetEditing)
        }
    }


    return (
        <>
            <div className="container flex sm:flex-row flex-col gap-8">
                <div className="container">
                    <div id="sectionTitle border-0 flex">
                        <div className="sectionTitle flex gap-2 justify-center">Chronicle Tenets
                            <a onClick={() => editTenet()}><i
                                className="icon icon-edit-b w-auto"></i></a>
                        </div>

                    </div>
                    {!isTenetEditing &&
                        <div className="container border border-slate-500 rounded-lg h-80 p-4">
                            <pre>{charTenet}</pre>
                        </div>}
                    {isTenetEditing &&

                        <form ref={formTenet} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleTenetsUpdate(e, formTenet)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charTenet}></textarea>
                            <Button type="submit">Update</Button>
                            <Button type="cancel" buttonClick={cancelEditTenet}>Cancel</Button>
                        </form>

                    }

                </div>
                <div className="container">
                    <div id="sectionTitle border-0 flex">
                        <div className="sectionTitle flex gap-2 justify-center">Touchstones & Convictions
                            <a onClick={() => editTouch()}><i
                                className="icon icon-edit-b w-auto"></i></a>
                        </div>
                    </div>
                    {!isTouchEditing &&
                        <div className="container border border-slate-500 rounded-lg min-h-80 p-4">
                            <pre>{charTouch}</pre>
                        </div>}
                    {isTouchEditing &&

                        <form ref={formTouch} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleTouchstonesUpdate(e, formTouch)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charTouch}></textarea>
                            <Button type="submit">Update</Button>
                            <Button type="cancel" buttonClick={cancelEditTouch}>Cancel</Button>
                        </form>

                    }

                </div>
                <div className="container">
                    <div id="sectionTitle border-0 flex">
                        <div className="sectionTitle flex gap-2 justify-center">Clan Bane
                            <a onClick={() => editBane()}><i
                                className="icon icon-edit-b w-auto"></i></a>
                        </div>
                    </div>
                    {!isBaneEditing &&
                        <div className="container border border-slate-500 rounded-lg min-h-80 p-4">
                            <pre>{charBane}</pre>
                        </div>}
                    {isBaneEditing &&
                        <form ref={formBane} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleBaneUpdate(e, formBane)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charBane}></textarea>
                            <Button type="submit">Update</Button>
                            <Button type="cancel" buttonClick={cancelEditBane}>Cancel</Button>
                        </form>
                    }

                </div>

            </div>

        </>
    )

}