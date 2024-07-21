'use client'
import Button from "@/app/components/Button/Button"
import { createClient } from "@/utils/supabase/client"
import { useRef, useState } from "react"

export default function CharResonanceHungerHumanity({ ...props }) {
    const { rhh_id, id, params, data } = props

    const [isEditingResonance, setIsEditingResonance] = useState(false)
    const [isEditingHunger, setIsEditingHunger] = useState(false)
    const [isEditingHumanity, setIsEditingHumanity] = useState(false)

    const [charResonance, setCharResonance] = useState(data.resonance)
    const [charHunger, setCharHunger] = useState(data.hunger)
    const [charHumanity, setCharHumanity] = useState(data.humanity)

    const hungerForm = useRef<any | undefined>();
    const humanityForm = useRef<any | undefined>();
    const resonanceForm = useRef<any | undefined>();

    const supabase = createClient();

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



        const { data, error } = await supabase
            .from('charRHH')
            .update({
                hunger: hunger,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharHunger(hunger);

            setIsEditingHunger(isEditingHunger => !isEditingHunger)
        }

    }
    async function handleResonanceFormSbumit(event: any, form: any) {
        event.preventDefault()
        let resonance = form.current[0].value;



        const { data, error } = await supabase
            .from('charRHH')
            .update({
                resonance: resonance,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharResonance(resonance);

            setIsEditingResonance(isEditingResonance => !isEditingResonance)
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



        const { data, error } = await supabase
            .from('charRHH')
            .update({
                humanity: humanity,

            })
            .eq('id', params.characterID)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setCharHumanity(humanity);
            setIsEditingHumanity(isEditingHumanity => !isEditingHumanity)

        }
    }
    return (
        <div className="container flex">
            {!isEditingResonance &&
                <div className="container flex flex-col gap-2 w-full justify-center items-center">
                    <div className="flex gap-2">
                        <a onClick={() => editResonance()}><i
                            className="icon icon-edit-b"></i></a>Resonance:
                    </div>
                    <div>{charResonance}</div>
                </div>
            }
            {isEditingResonance &&
                <div className="container flex flex-col gap-2 w-full justify-center items-center">
                    <div className="flex gap-2">
                        <a onClick={() => editResonance()}><i
                            className="icon icon-edit-b"></i></a>Resonance:
                    </div>

                    <form ref={resonanceForm} action="" onSubmit={(e) => handleResonanceFormSbumit(e, resonanceForm)} >
                        <input type="text" defaultValue={charResonance} />
                        <Button type="submit">Save</Button>
                    </form>
                </div>
            }
            {!isEditingHunger && <div className="container flex gap-2 w-full justify-center">
                <a onClick={() => editHunger()}><i
                    className="icon icon-edit-b"></i></a>
                <div className="flex flex-col">
                    <div className="container">Hunger</div>
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
                <a onClick={() => editHunger()}><i
                    className="icon icon-edit-b"></i></a>
                <div className="flex flex-col">
                    <div className="container">Hunger</div>
                    <form ref={hungerForm} action="" onSubmit={(e) => handleHungerFormSbumit(e, hungerForm)}>
                        <div className="container flex gap-1">
                            {charHunger.map((hunger: any, index: any) => {
                                return (
                                    <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={hunger} defaultChecked={hunger} />
                                )
                            })}
                        </div>
                        <Button type="submit">Save</Button>
                    </form>
                </div>
            </div>}
            {!isEditingHumanity &&
                <div className="container flex w-full justify-center">
                    <a onClick={() => editHumanity()}><i
                        className="icon icon-edit-b"></i></a>
                    <div className="flex flex-col">
                        <div className="container">Humanity</div>
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
                    <a onClick={() => editHumanity()}><i
                        className="icon icon-edit-b"></i></a>
                    <div className="flex flex-col">
                        <div className="container">Humanity</div>
                        <form ref={humanityForm} action="" onSubmit={(e) => handleHumanityFormSbumit(e, humanityForm)}>
                            <div className="container flex gap-1">
                                {charHumanity.map((humanity: any, index: any) => {
                                    return (
                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={humanity} defaultChecked={humanity} />
                                    )
                                })}
                            </div>
                            <Button type="submit">Save</Button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}