'use client'
import Button from "@/app/components/Button/Button"
import { useRef, useState } from "react"
import './CharResonanceHungerHumanity.scss'
import { updateHumanity, updateHunger, updateResonance } from "../actions"
import { useToast } from "@/app/components/Toast/useToast"

export default function CharResonanceHungerHumanity({ ...props }) {
    const { rhh_id, id, params, data } = props



    const [isEditingResonance, setIsEditingResonance] = useState(false)
    const [isEditingHunger, setIsEditingHunger] = useState(false)
    const [isEditingHumanity, setIsEditingHumanity] = useState(false)

    const [charResonance, setCharResonance] = useState(data.resonance)
    const [charHunger, setCharHunger] = useState(data.hunger)
    const [charHumanity, setCharHumanity] = useState(data.humanity)

    const [isPending, setIsPending] = useState(false);

    const hungerForm = useRef<any | undefined>(null);
    const humanityForm = useRef<any | undefined>(null);
    const resonanceForm = useRef<any | undefined>(null);

    const { showToast } = useToast();

    function editResonance() {
        setIsEditingResonance(isEditingResonance => !isEditingResonance)
    }
    function editHunger() {
        setIsEditingHunger(isEditingHunger => !isEditingHunger)
    }
    function editHumanity() {
        setIsEditingHumanity(isEditingHumanity => !isEditingHumanity)
    }

    async function handleHungerFormSbumit(event: any, form: any) {
        event.preventDefault()
        let hunger = [
            form.current[0].checked,
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked,
        ];
        let id = form.current[5].value
        let formData = {
            id,
            hunger
        }
        setCharHunger(hunger);


        setIsEditingHunger(isEditingHunger => !isEditingHunger)

        setIsPending(true);
        const result = await updateHunger(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }




    }
    async function handleResonanceFormSbumit(event: any, form: any) {
        event.preventDefault()
        let resonance = form.current[0].value;
        let id = form.current[1].value

        let formData = {
            id,
            resonance
        }

        setCharResonance(resonance);


        setIsEditingResonance(isEditingResonance => !isEditingResonance)


        setIsPending(true);
        const result = await updateResonance(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }


    }
    async function handleHumanityFormSbumit(event: any, form: any) {
        event.preventDefault()
        let humanity = [
            form.current[0].checked,
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked,
            form.current[5].checked,
            form.current[6].checked,
            form.current[7].checked,
            form.current[8].checked,
            form.current[9].checked,

        ];
        let id = form.current[10].value

        setCharHumanity(humanity);

        let formData = {
            id,
            humanity
        }


        setIsEditingHumanity(isEditingHumanity => !isEditingHumanity)

        setIsPending(true);
        const result = await updateHumanity(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

    }
    return (
        <div className="container flex sm:flex-row flex-col gap-4 ">
            {!isEditingResonance &&
                <div className="container flex flex-col gap-2 w-full items-center">
                    <div className="flex gap-2">
                        <a onClick={() => editResonance()}><i
                            className="icon icon-edit-b"></i></a>Resonance:
                    </div>
                    <div className="resonance">{charResonance}</div>
                </div>
            }
            {isEditingResonance &&
                <div className="container flex flex-col gap-2 w-full justify-center items-center">
                    <div className="flex gap-2">
                        <a onClick={() => editResonance()}><i
                            className="icon icon-edit-b"></i></a>Resonance:
                    </div>

                    <form ref={resonanceForm} className="flex flex-col gap-2" action="" onSubmit={(e) => handleResonanceFormSbumit(e, resonanceForm)} >
                        <input type="text" name="resonance" defaultValue={charResonance} />
                        <input type="hidden" name="id" value={params} />
                        <Button type="submit">Save</Button>
                    </form>
                </div>
            }
            {!isEditingHunger && <div className="container flex gap-2 w-full justify-center">

                <div className="flex flex-col  gap-2">
                    <div className="container flex gap-2 justify-center"> <a onClick={() => editHunger()}><i
                        className="icon icon-edit-b"></i></a>Hunger</div>
                    <div className="container flex gap-1">
                        {charHunger.map((hunger: any, index: any) => {
                            return (
                                <div key={index} className={['circle', hunger ? 'filled' : ''].join(' ')} ></div>
                            )
                        })}
                    </div>
                </div>
            </div>}
            {isEditingHunger && <div className="container flex gap-2 w-full justify-center">

                <div className="flex flex-col gap-2">
                    <div className="container flex gap-2 justify-center"><a onClick={() => editHunger()}><i
                        className="icon icon-edit-b"></i></a>Hunger</div>
                    <form ref={hungerForm} className="flex flex-col gap-2" action="" onSubmit={(e) => handleHungerFormSbumit(e, hungerForm)}>
                        <div className="container flex gap-1">
                            {charHunger.map((hunger: any, index: any) => {
                                return (
                                    <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={hunger} defaultChecked={hunger} />
                                )
                            })}
                        </div>
                        <input type="hidden" name="id" value={params} />
                        <Button type="submit">Save</Button>
                    </form>
                </div>
            </div>}
            {!isEditingHumanity &&
                <div className="container flex w-full justify-center">

                    <div className="flex flex-col gap-2 ">
                        <div className="container flex gap-2 justify-center"><a onClick={() => editHumanity()}><i
                            className="icon icon-edit-b"></i></a>Humanity</div>
                        <div className="container flex gap-1">
                            {charHumanity.map((humanity: any, index: any) => {
                                return (
                                    <div key={index} className={['circle', humanity ? 'filled' : ''].join(' ')} ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
            {isEditingHumanity &&
                <div className="container flex w-full justify-center">

                    <div className="flex flex-col gap-2">
                        <div className="container flex gap-2 justify-center"><a onClick={() => editHumanity()}><i
                            className="icon icon-edit-b"></i></a>Humanity</div>
                        <form ref={humanityForm} className="flex flex-col gap-2" action="" onSubmit={(e) => handleHumanityFormSbumit(e, humanityForm)}>
                            <div className="container flex gap-1">
                                {charHumanity.map((humanity: any, index: any) => {
                                    return (
                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={humanity} defaultChecked={humanity} />
                                    )
                                })}
                            </div>
                            <input type="hidden" name="id" value={params} />
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}