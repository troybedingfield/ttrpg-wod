'use client'
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";

export default function CharBioAndNotes({ ...props }) {
    const { id, params, data } = props;

    const [trueAge, setTrueAge] = useState(data.trueAge)
    const [apparentAge, setApparentAge] = useState(data.apparentAge)
    const [DOB, setDOB] = useState(data.DOB)
    const [DOD, setDOD] = useState(data.DOD)
    const [appearance, setAppearance] = useState(data.appearance)
    const [distinguishingFeatures, setDistinguishingFeatures] = useState(data.distinguishingFeatures)
    const [history, setHistory] = useState(data.history)
    const [notes, setNotes] = useState(data.notes)

    const [isEditingNotes, setIsEditingNotes] = useState(false)
    const [isEditingBio, setIsEditingBio] = useState(false)


    const notesForm = useRef<any | undefined>();
    const bioForm = useRef<any | undefined>();

    const supabase = createClient();


    function editNotes() {
        setIsEditingNotes(isEditingNotes => !isEditingNotes)
    }
    function editBio() {
        setIsEditingBio(isEditingBio => !isEditingBio)
    }

    async function handleNotesFormSbumit(event: any, form: any) {
        event.preventDefault()
        let notes = form.current[0].value;



        const { data, error } = await supabase
            .from('charBioAndNotes')
            .update({
                notes: notes,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setNotes(notes);

            setIsEditingNotes(isEditingNotes => !isEditingNotes)
        }
    }
    async function handleBioFormSbumit(event: any, form: any) {
        event.preventDefault()
        let trueAge = form.current[0].value;
        let apparentAge = form.current[1].value;
        let DOB = form.current[2].value;
        let DOD = form.current[3].value;
        let appearance = form.current[4].value;
        let distinguishingFeatures = form.current[5].value;
        let history = form.current[6].value;



        const { data, error } = await supabase
            .from('charBioAndNotes')
            .update({
                trueAge: trueAge,
                apparentAge: apparentAge,
                DOB: DOB,
                DOD: DOD,
                appearance: appearance,
                distinguishingFeatures: distinguishingFeatures,
                history: history,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setTrueAge(trueAge)
            setApparentAge(apparentAge)
            setDOB(DOB)
            setDOD(DOD)
            setAppearance(appearance)
            setDistinguishingFeatures(distinguishingFeatures)
            setHistory(history)

            setIsEditingBio(isEditingBio => !isEditingBio)
        }
    }


    return (
        <>
            <div className="container flex gap-4">
                {!isEditingNotes &&
                    <div className="container flex flex-col">
                        <a onClick={() => editNotes()}><i
                            className="icon icon-edit-b"></i></a>
                        <div className="container flex border border-slate-500 rounded-lg h-full p-4">

                            <div className="container flex flex-col w-full h-full">
                                <div>Notes: </div>
                                <div className="container flex h-full w-full">
                                    <pre>{notes}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {isEditingNotes &&

                    <div className="container flex flex-col h-full w-full">
                        <a onClick={() => editNotes()}><i
                            className="icon icon-edit-b"></i></a>
                        <form ref={notesForm} className="flex w-full h-full flex-col gap-4" onSubmit={(e) => handleNotesFormSbumit(e, notesForm)}>
                            <div className="container flex flex-col h-full border border-slate-500 rounded-lg p-4">

                                <div className="container flex flex-col w-full h-full">

                                    <div>Notes: </div>
                                    <div className="flex h-full">
                                        <textarea className="flex w-full h-60" name="" defaultValue={notes} id=""></textarea>
                                    </div>



                                </div>
                            </div>
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                }
                {!isEditingBio &&
                    <div className="container flex flex-col h-full w-full">
                        <a onClick={() => editBio()}><i
                            className="icon icon-edit-b"></i></a>
                        <div className="container border border-slate-500 rounded-lg p-4 flex flex-col gap-4">
                            <div className="container flex w-full">
                                True Age: {trueAge}
                            </div>
                            <div className="container flex w-full">
                                Apparent Age: {apparentAge}
                            </div>
                            <div className="container flex w-full">
                                Date of birth: {DOB}
                            </div>
                            <div className="container flex w-full">
                                Date of death: {DOD}
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>Appearance: </div>
                                <div>
                                    <pre>{appearance}</pre>
                                </div>
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>Distinguishing Features: </div>
                                <div>
                                    <pre>{distinguishingFeatures}</pre>
                                </div>
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>History: </div>
                                <div>
                                    <pre>{history}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {isEditingBio &&
                    <div className="container flex flex-col h-full w-full">
                        <a onClick={() => editBio()}><i
                            className="icon icon-edit-b"></i></a>
                        <form ref={bioForm} className="flex flex-col gap-4" onSubmit={(e) => handleBioFormSbumit(e, bioForm)}>
                            <div className="container border border-slate-500 rounded-lg p-4 flex flex-col gap-4">
                                <div className="container flex w-full items-center gap-4">
                                    <div className="text-nowrap w-auto">True Age:</div> <input className="flex w-auto" type="text" defaultValue={trueAge} />
                                </div>
                                <div className="container flex w-full items-center gap-4">
                                    <div className="text-nowrap w-auto">Apparent Age:</div> <input className="flex w-auto" type="text" defaultValue={apparentAge} />
                                </div>
                                <div className="container flex w-full items-center gap-4">
                                    <div className="text-nowrap w-auto">Date of birth:</div> <input className="flex w-auto" type="text" defaultValue={DOB} />
                                </div>
                                <div className="container flex w-full items-center gap-4">
                                    <div className="text-nowrap w-auto">Date of death:</div> <input className="flex w-auto" type="text" defaultValue={DOD} />
                                </div>
                                <div className="container flex flex-col w-full">
                                    <div>Appearance: </div>
                                    <div><textarea className="flex w-full h-60" name="" defaultValue={appearance} id=""></textarea></div>
                                </div>
                                <div className="container flex flex-col w-full">
                                    <div>Distinguishing Features: </div>
                                    <div><textarea className="flex w-full h-60" name="" defaultValue={distinguishingFeatures} id=""></textarea></div>
                                </div>
                                <div className="container flex flex-col w-full">
                                    <div>History: </div>
                                    <div><textarea className="flex w-full h-60" name="" defaultValue={history} id=""></textarea></div>
                                </div>
                            </div>
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                }
            </div >
        </>
    )
}