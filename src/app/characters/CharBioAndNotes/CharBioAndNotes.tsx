'use client'
import Button from "@/app/components/Button/Button";
import { useRef, useState } from "react";
import './CharBioAndNotes.scss'
import { updateBio, updateNotes } from "../actions";
import { useToast } from "@/app/components/Toast/useToast";

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


    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();


    const notesForm = useRef<any | undefined>(null);
    const bioForm = useRef<any | undefined>(null);



    function editNotes() {
        setIsEditingNotes(isEditingNotes => !isEditingNotes)
    }
    function editBio() {
        setIsEditingBio(isEditingBio => !isEditingBio)
    }

    async function handleNotesFormSbumit(event: any, form: any) {
        event.preventDefault()
        let notes = form.current[0].value;
        let id = form.current[1].value;

        let formData = {
            id,
            notes
        }



        setNotes(notes);

        setIsEditingNotes(isEditingNotes => !isEditingNotes)

        setIsPending(true);
        const result = await updateNotes(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

    }
    async function handleBioFormSubmit(event: any, form: any) {
        event.preventDefault()
        let trueAge = form.current[0].value;
        let apparentAge = form.current[1].value;
        let DOB = form.current[2].value;
        let DOD = form.current[3].value;
        let appearance = form.current[4].value;
        let distinguishingFeatures = form.current[5].value;
        let history = form.current[6].value;
        let id = form.current[7].value;

        let formData = {
            id,
            trueAge,
            apparentAge,
            DOB,
            DOD,
            appearance,
            distinguishingFeatures,
            history
        }



        setTrueAge(trueAge)
        setApparentAge(apparentAge)
        setDOB(DOB)
        setDOD(DOD)
        setAppearance(appearance)
        setDistinguishingFeatures(distinguishingFeatures)
        setHistory(history)

        setIsEditingBio(isEditingBio => !isEditingBio)


        setIsPending(true);
        const result = await updateBio(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }


    }


    return (
        <>
            <div className="container flex gap-4 sm:flex-row flex-col">
                {!isEditingBio &&
                    <div className="container flex flex-col h-full w-full">
                        <a onClick={() => editBio()}><i
                            className="icon icon-edit-b"></i></a>
                        <div className="container border border-slate-500 rounded-lg p-4 flex flex-col gap-4 min-h-96">
                            <div className="container flex w-full gap-2">
                                True Age: <span className="bioText">{trueAge}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Apparent Age: <span className="bioText">{apparentAge}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Date of birth: <span className="bioText">{DOB}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Date of death: <span className="bioText">{DOD}</span>
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>Appearance: </div>
                                <div>
                                    <pre className="bioText">{appearance}</pre>
                                </div>
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>Distinguishing Features: </div>
                                <div>
                                    <pre className="bioText">{distinguishingFeatures}</pre>
                                </div>
                            </div>
                            <div className="container flex flex-col w-full">
                                <div>History: </div>
                                <div>
                                    <pre className="bioText">{history}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {isEditingBio &&
                    <div className="container flex flex-col h-full w-full">
                        <a onClick={() => editBio()}><i
                            className="icon icon-edit-b"></i></a>
                        <form ref={bioForm} className="flex flex-col gap-4" onSubmit={(e) => handleBioFormSubmit(e, bioForm)}>
                            <div className="container border border-slate-500 rounded-lg p-4 flex flex-col gap-4 min-h-96">
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
                            <input type="hidden" name="id" value={params} />
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                }
                {!isEditingNotes &&
                    <div className="container flex flex-col">
                        <a onClick={() => editNotes()}><i
                            className="icon icon-edit-b"></i></a>
                        <div className="container flex border border-slate-500 rounded-lg h-full p-4 min-h-96">

                            <div className="container flex flex-col w-full h-full">
                                <div>Notes: </div>
                                <div className="container flex h-full w-full">
                                    <pre className="notes">{notes}</pre>
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
                            <div className="container flex flex-col h-full border border-slate-500 rounded-lg p-4 min-h-96">

                                <div className="container flex flex-col w-full h-full">

                                    <div>Notes: </div>
                                    <div className="flex h-full">
                                        <textarea className="flex w-full h-full" name="" defaultValue={notes} id=""></textarea>
                                    </div>



                                </div>
                            </div>
                            <input type="hidden" name="id" value={params} />
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                }

            </div >
        </>
    )
}