'use client'
import Button from "@/app/components/Button/Button";
import { useRef, useState } from "react";
import './CharTTCB.scss'
import { updateClanBane, updateTenets, updateTouchstones } from "../actions";
import { useToast } from "@/app/components/Toast/useToast";

export default function CharTTCB({ ...props }) {
    const { id, params, ttcb_id, tenets, touchstones, bane } = props;

    const [isTenetEditing, setIsTenetEditing] = useState(false);
    const [isTouchEditing, setIsTouchEditing] = useState(false);
    const [isBaneEditing, setIsBaneEditing] = useState(false);

    const [charTenet, setCharTenet] = useState(tenets)
    const [charTouch, setCharTouch] = useState(touchstones)
    const [charBane, setCharBane] = useState(bane)

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    const formTenet = useRef<any | undefined>(null);
    const formTouch = useRef<any | undefined>(null);
    const formBane = useRef<any | undefined>(null);


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


        let chronTenets = form.current[0].value;
        let id = form.current[1].value;

        let formData = {
            id,
            chronTenets
        }


        setCharTenet(chronTenets);
        setIsTenetEditing(isTenetEditing => !isTenetEditing)

        setIsPending(true);
        const result = await updateTenets(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }



    }
    async function handleTouchstonesUpdate(event: any, form: any) {
        event.preventDefault();


        let touchConvictions = form.current[0].value;
        let id = form.current[1].value;

        let formData = {
            id,
            touchConvictions
        }


        setCharTouch(touchConvictions);
        setIsTouchEditing(isTenetEditing => !isTenetEditing)

        setIsPending(true);
        const result = await updateTouchstones(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }



    }
    async function handleBaneUpdate(event: any, form: any) {
        event.preventDefault();


        let clanBane = form.current[0].value;
        let id = form.current[1].value;

        let formData = {
            id,
            clanBane
        }


        setCharBane(clanBane);
        setIsBaneEditing(isTenetEditing => !isTenetEditing)

        setIsPending(true);
        const result = await updateClanBane(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
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
                        <div className="notes container border border-slate-500 rounded-lg h-80 p-4">
                            <pre>{charTenet}</pre>
                        </div>}
                    {isTenetEditing &&

                        <form ref={formTenet} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleTenetsUpdate(e, formTenet)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charTenet}></textarea>
                            <input type="hidden" name="id" value={params} />
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
                        <div className="notes container border border-slate-500 rounded-lg min-h-80 p-4">
                            <pre>{charTouch}</pre>
                        </div>}
                    {isTouchEditing &&

                        <form ref={formTouch} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleTouchstonesUpdate(e, formTouch)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charTouch}></textarea>
                            <input type="hidden" name="id" value={params} />
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
                        <div className="notes container border border-slate-500 rounded-lg min-h-80 p-4">
                            <pre>{charBane}</pre>
                        </div>}
                    {isBaneEditing &&
                        <form ref={formBane} action="" className="container flex flex-col gap-2" onSubmit={(e) => handleBaneUpdate(e, formBane)}>
                            <textarea className="flex w-full rounded-lg border h-80 border-slate-500 p-4" name="" id="" defaultValue={charBane}></textarea>
                            <input type="hidden" name="id" value={params} />
                            <Button type="submit">Update</Button>
                            <Button type="cancel" buttonClick={cancelEditBane}>Cancel</Button>
                        </form>
                    }

                </div>

            </div>

        </>
    )

}