'use cleint'
import Button from "@/app/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useRef, useState } from "react";

export default function CharFlaw({ ...props }) {
    const { params, data } = props;

    const [isEditing, setIsEditing] = useState(false)

    const [flawData, setFlawData] = useState(data)
    const [flawName, setFlawName] = useState(data.flawName)
    const [flawLevels, setFlawLevels] = useState(data.flawLevels)


    const form = useRef<any | undefined>();

    const supabase = createClient();



    function editFlaw() {
        setIsEditing(isEditing => !isEditing);
    }
    function cancelEditFlaw() {
        setIsEditing(isEditing => !isEditing);
    }

    async function handleFlawUpdate(event: any, form: any) {
        event.preventDefault();



        let flawName = form.current[0].value;
        let flawLevels = [
            form.current[1].checked,
            form.current[2].checked,
            form.current[3].checked,
            form.current[4].checked,
            form.current[5].checked
        ]


        const { data, error } = await supabase
            .from('charFlaws')
            .update({
                flawName: flawName,
                flawLevels: flawLevels
            })
            .eq('flaw_id', flawData.flaw_id)
            .select()

        if (error) {
            console.log(error);
        }

        if (!error) {

            setFlawName(flawName);
            setFlawLevels(flawLevels);

            setIsEditing(isEditing => !isEditing)
        }
    }

    async function deleteFlaw() {
        const { error } = await supabase
            .from('charFlaws')
            .delete()
            .eq('flaw_id', flawData.flaw_id)
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
                    <div className="advantageName flex w-full gap-2"><a onClick={() => editFlaw()}><i
                        className="icon icon-edit-b"></i></a>{flawName}</div>
                    <div className="levels">
                        {flawLevels.map((str: any, index: any) => {
                            return (
                                <div key={index} className={['circle', str ? 'filled' : ''].join(' ')} ></div>
                            )
                        })}
                    </div>
                </div>
            }
            {isEditing &&
                <form ref={form} className="container flex flex-col gap-2" onSubmit={(e) => handleFlawUpdate(e, form)}>
                    {/* <div className="advantageName flex w-full">{advName}</div> */}
                    <div className="container flex items-center border rounded-lg border-slate-500 min-h-12 px-2 gap-4">
                        <input className="advantageName flex w-full" defaultValue={flawName} type="text" />
                        <div className="levels">
                            {flawLevels.map((level: any, index: any) => {
                                return (
                                    <input key={index} id={"level" + (index + 1)} className="checkbox-round" type="checkbox" defaultValue={level} defaultChecked={level} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="container flex gap-8">
                        <Button classNames={"w-full"} type="submit">Update</Button>
                        <Button classNames={"w-full"} type="cancel" buttonClick={cancelEditFlaw}>Cancel</Button>
                        <Button classNames={"w-full"} type="delete" buttonClick={deleteFlaw}>Delete</Button>
                    </div>
                </form>
            }
        </>
    )
}