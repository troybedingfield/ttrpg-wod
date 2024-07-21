'use client'
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";

export default function CharAdvantage({ ...props }) {
    const { params, data } = props;

    const [isEditing, setIsEditing] = useState(false)

    const [advData, setAdvData] = useState(data)
    const [advName, setAdvName] = useState(data.advantageName)
    const [advLevels, setAdvLevels] = useState(data.advantageLevels)

    const form = useRef<any | undefined>();

    const supabase = createClient();



    function editAdvantage() {
        setIsEditing(isEditing => !isEditing);
    }
    function cancelEditAdvantage() {
        setIsEditing(isEditing => !isEditing);
    }

    async function handleAdvantageUpdate(event: any, form: any) {
        event.preventDefault();



        let advantageName = form.current[0].value;
        let advantageLevels = [
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked,
            form.current[5].checked
        ]


        const { data, error } = await supabase
            .from('charAdvantages')
            .update({
                advantageName: advantageName,
                advantageLevels: advantageLevels
            })
            .eq('adv_id', advData.adv_id)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setAdvName(advantageName);
            setAdvLevels(advantageLevels);

            setIsEditing(isEditing => !isEditing)
        }
    }

    async function deleteAdvantage() {
        const { error } = await supabase
            .from('charAdvantages')
            .delete()
            .eq('adv_id', advData.adv_id)
        if (error) {
            console.log(error);
        }

        if (!error) {
            window.location.reload();
        }
    }

    return (
        <>
            {!isEditing &&
                <div className="container flex items-center border rounded-lg border-slate-500 min-h-12 px-4">
                    <div className="advantageName flex w-full gap-2"><a onClick={() => editAdvantage()}><i
                        className="icon icon-edit-b"></i></a>{advName}</div>
                    <div className="levels">
                        {advLevels.map((level: any, index: any) => {
                            return (
                                <div key={index} className={['circle', level ? 'filled' : ''].join(' ')} ></div>
                            )
                        })}
                    </div>
                </div>
            }
            {isEditing &&
                <form ref={form} className="container flex flex-col gap-2" onSubmit={(e) => handleAdvantageUpdate(e, form)}>
                    {/* <div className="advantageName flex w-full">{advName}</div> */}
                    <div className="container flex items-center border rounded-lg border-slate-500 min-h-12 px-2 gap-4">
                        <input className="advantageName flex w-full" defaultValue={advName} type="text" />
                        <div className="levels">
                            {advLevels.map((level: any, index: any) => {
                                return (
                                    <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={level} defaultChecked={level} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="container flex gap-8">
                        <Button classNames={"w-full"} type="submit">Update</Button>
                        <Button classNames={"w-full"} type="cancel" buttonClick={cancelEditAdvantage}>Cancel</Button>
                        <Button classNames={"w-full"} type="delete" buttonClick={deleteAdvantage}>Delete</Button>
                    </div>
                </form>
            }
        </>
    )
}