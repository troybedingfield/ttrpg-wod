'use client'
import Button from "@/app/components/Button/Button";
import { useRef, useState } from "react";
import { deleteAdvantage, updateAdvantage } from "../../actions";
import { useToast } from "@/app/components/Toast/useToast";

export default function CharAdvantage({ ...props }) {
    const { params, data, dataId } = props;

    const [isEditing, setIsEditing] = useState(false)

    const [advData, setAdvData] = useState(data)
    const [advName, setAdvName] = useState(data.advantageName)
    const [advLevels, setAdvLevels] = useState(data.advantageLevels)

    const [isPending, setIsPending] = useState(false);

    const { showToast } = useToast();

    const form = useRef<any | undefined>(null);




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
        let advID = form.current[6].value;

        let formData = {
            advID,
            advantageName,
            advantageLevels
        }


        setAdvName(advantageName);
        setAdvLevels(advantageLevels);
        setIsEditing(isEditing => !isEditing);

        setIsPending(true);
        const result = await updateAdvantage(formData);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
        }

    }

    async function handleDeleteAdvantage() {



        setIsPending(true);
        const result = await deleteAdvantage(dataId, params);
        setIsPending(false);

        if (result) {
            showToast(`${result.message}`, `${result.type}`);
        } else {
            showToast('Something went wrong', 'error');
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
                    <input type="hidden" name="advID" value={dataId} />
                    <div className="container flex gap-8">
                        <Button classNames={"w-full"} type="submit">Update</Button>
                        <Button classNames={"w-full"} type="cancel" buttonClick={cancelEditAdvantage}>Cancel</Button>
                        <Button classNames={"w-full"} type="delete" buttonClick={handleDeleteAdvantage}>Delete</Button>
                    </div>
                </form>
            }
        </>
    )
}