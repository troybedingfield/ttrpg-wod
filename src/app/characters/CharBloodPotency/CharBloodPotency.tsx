'use client'
import { useRef, useState } from "react";
import './CharBloodPotency.scss'
import Button from "@/app/components/Button/Button";
import { updateBloodForm, updateBloodPotency } from "../actions";

export default function CharBloodPotency({ ...props }) {
    const { id, params, data } = props;

    const [isEditingBP, setIsEditingBP] = useState(false);
    const [isEditingBloodForm, setIsEditingBloodForm] = useState(false);

    const [bloodPotency, setBloodPotency] = useState(data.bloodPotency)
    const [bloodSurge, setBloodSurge] = useState(data.bloodSurge)
    const [powerBonus, setPowerBonus] = useState(data.powerBonus)
    const [feedingPenalty, setFeedingPenalty] = useState(data.feedingPenalty)
    const [mendAmount, setMendAmount] = useState(data.mendAmount)
    const [rouseReroll, setRouseReroll] = useState(data.rouseReroll)
    const [baneSeverity, setBaneSeverity] = useState(data.baneSeverity)

    const bloodPotencyForm = useRef<any | undefined>();
    const bloodForm = useRef<any | undefined>();



    function editBloodPotency() {
        setIsEditingBP(isEditingBP => !isEditingBP)
    }
    function editBloodForm() {
        setIsEditingBloodForm(isEditingBloodForm => !isEditingBloodForm)
    }

    async function handleBPFormSbumit(event: any, form: any) {
        event.preventDefault()
        let bloodPotency = [
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
        ]
        let id = form.current[10].value;

        let formData = {
            id,
            bloodPotency
        }


        updateBloodPotency(formData);
        setBloodPotency(bloodPotency);
        setIsEditingBP(isEditingBP => !isEditingBP);


    }

    async function handleBloodFormSbumit(event: any, form: any) {
        event.preventDefault()
        let bloodSurge = form.current[0].value;
        let powerBonus = form.current[1].value;
        let feedingPenalty = form.current[2].value;
        let mendAmount = form.current[3].value;
        let rouseReroll = form.current[4].value;
        let baneSeverity = form.current[5].value;
        let id = form.current[6].value;

        let formData = {
            id,
            bloodSurge,
            powerBonus,
            feedingPenalty,
            mendAmount,
            rouseReroll,
            baneSeverity
        }

        updateBloodForm(formData);
        setBloodSurge(bloodSurge);
        setPowerBonus(powerBonus);
        setFeedingPenalty(feedingPenalty);
        setMendAmount(mendAmount);
        setRouseReroll(rouseReroll);
        setBaneSeverity(baneSeverity);

        setIsEditingBloodForm(isEditingBloodForm => !isEditingBloodForm)



    }


    return (
        <>

            <div className="container flex flex-col gap-2">
                <div className="sectionTitle flex gap-2 justify-center">Blood Potency <a onClick={() => editBloodPotency()}><i
                    className="icon icon-edit-b"></i></a>

                </div>
                <div className="flex justify-center gap-1">
                    {!isEditingBP && bloodPotency.map((health: any, index: any) => {
                        return (
                            <div key={index} className={['circle', health ? 'filled' : ''].join(' ')} ></div>
                        )
                    })}
                    {isEditingBP &&
                        <form ref={bloodPotencyForm} className="flex flex-col gap-2" action="" onSubmit={(e) => handleBPFormSbumit(e, bloodPotencyForm)}>
                            <div className="flex gap-1">
                                {bloodPotency.map((health: any, index: any) => {
                                    return (
                                        <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={health} defaultChecked={health} />
                                    )
                                })}
                            </div>
                            <input type="hidden" name="id" defaultValue={params.characterID} />
                            <Button type="submit">Save</Button>
                        </form>}
                </div>
            </div>
            {!isEditingBloodForm &&
                <div className="container flex flex-col">
                    <div className="container flex">
                        <a onClick={() => editBloodForm()}><i
                            className="icon icon-edit-b"></i></a>
                    </div>
                    <div className="container flex sm:flex-row flex-col border border-slate-500 rounded-lg p-4 gap-4">
                        <div className="container flex flex-col w-full gap-4">
                            <div className="container flex w-full gap-2">
                                Blood Surge: <span className="bpText">{bloodSurge}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Power Bonus: <span className="bpText">{powerBonus}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Feeding Penalty: <span className="bpText">{feedingPenalty}</span>
                            </div>
                        </div>
                        <div className="container flex flex-col w-full gap-4">
                            <div className="container flex w-full gap-2">
                                Mend Amount: <span className="bpText">{mendAmount}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Rouse Re-Roll: <span className="bpText">{rouseReroll}</span>
                            </div>
                            <div className="container flex w-full gap-2">
                                Bane Severity: <span className="bpText">{baneSeverity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isEditingBloodForm &&
                <div className="container flex flex-col">
                    <div className="container flex">
                        <a onClick={() => editBloodForm()}><i
                            className="icon icon-edit-b"></i></a>
                    </div>
                    <form ref={bloodForm} className="flex flex-col gap-4" onSubmit={(e) => handleBloodFormSbumit(e, bloodForm)}>
                        <div className="flex flex-colcontainer border border-slate-500 rounded-lg p-4 gap-2">
                            <div className="container flex flex-col w-full gap-4">
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Blood Surge: </div>
                                    <input className="flex w-auto" type="text" defaultValue={bloodSurge} />
                                </div>
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Power Bonus: </div>
                                    <input className="flex w-auto" type="text" defaultValue={powerBonus} />
                                </div>
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Feeding Penalty: </div>
                                    <input className="flex w-auto" type="text" defaultValue={feedingPenalty} />
                                </div>
                            </div>
                            <div className="container flex flex-col w-full gap-4">
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Mend Amount: </div>
                                    <input className="flex w-auto" type="text" defaultValue={mendAmount} />
                                </div>
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Rouse Re-roll: </div>
                                    <input className="flex w-auto" type="text" defaultValue={rouseReroll} />
                                </div>
                                <div className="container flex w-full items-center gap-2">
                                    <div className="text-nowrap w-auto">Bane Severity: </div>
                                    <input className="flex w-auto" type="text" defaultValue={baneSeverity} />
                                </div>
                            </div>

                        </div>
                        <input type="hidden" name="id" defaultValue={params.characterID} />
                        <Button type="submit">Save</Button>
                    </form>
                </div>
            }
        </>
    )
}